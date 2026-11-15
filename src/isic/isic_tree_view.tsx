
import type {
	GroupExample,
	IsicDivision,
	IsicGroup,
	IsicItem,
	IsicSection,
	IsicTree
} from "./types";
import { EXAMPLES } from "./examples";

export { IsicTreeView };
export type { IIsicTreeView, IIsicTreeViewHandlers };


/** Callbacks used by IsicTreeView to report user actions */
interface IIsicTreeViewHandlers {
	/** The user clicked a section, a division or a group in the tree */
	OnSelect(item: IsicItem): void;
}

/** Left column: classifier tree (sections > divisions > groups) with search filter */
interface IIsicTreeView {
	/** Creates the column and returns its root element, the caller attaches it to the page */
	CreateView(): HTMLElement;

	/** Passes the loaded classifier tree and draws it */
	SetTree(tree: IsicTree): void;

	/** Sets the search query: the tree shows only matching divisions and groups */
	SetQuery(query: string): void;

	/** Highlights the item, expands the branches leading to it and scrolls to it (no OnSelect call) */
	SelectItem(item: IsicItem): void;

	/** Expands all sections and divisions */
	ExpandAll(): void;

	/** Collapses all sections and divisions */
	CollapseAll(): void;

	/** Replaces the tree with an error message */
	ShowError(message: string): void;
}


/**
 * Left column: classifier tree with search filter.
 *
 * Usage:
 *   const view = IsicTreeView({ OnSelect });
 *   parent_el.appendChild(view.CreateView());
 *   view.SetTree(tree);        // after the tree is loaded
 *   view.SetQuery("oil");      // on search input
 *
 * @param handlers  callbacks for the user actions
 */
function IsicTreeView(handlers: IIsicTreeViewHandlers): IIsicTreeView {

	// ----- State -----

	// Loaded tree
	let m_tree: IsicTree = {
		sections: [],
		sections_by_code: {},
		divisions_by_code: {},
		groups_by_code: {}
	};

	// Search query, trimmed and lower-cased; empty string means no filter
	let m_query = "";

	// Key of the selected item (see _GetItemKey), or null
	let m_selected_key: string | null = null;

	// Which nodes are expanded. Keys look like "s:A" (section) and "d:01" (division).
	// Kept apart from the DOM so expanded branches survive re-rendering, for example on search.
	const m_open_nodes = new Set<string>();

	// Elements of the last rendered tree, by item key. Rebuilt on every _RenderTree().
	const m_buttons = new Map<string, HTMLElement>();   // clickable row of a section, division or group
	const m_nodes = new Map<string, HTMLElement>();     // container of a section or division (gets class "open")

	// Row that is highlighted now
	let m_active_el: HTMLElement | null = null;

	// ----- Elements -----
	let m_view_el: HTMLElement;
	let m_tree_el: HTMLElement;
	let m_status_el: HTMLElement;

	return {
		CreateView,
		SetTree,
		SetQuery,
		SelectItem,
		ExpandAll,
		CollapseAll,
		ShowError
	};


	// ==========================================================
	// Interface
	// ==========================================================

	function CreateView(): HTMLElement {
		m_view_el = (
			<section className="panel">
				<div className="head">
					<h2>Дерево классификатора</h2>
				</div>
				{ m_tree_el =
					<div className="tree">
						<div className="loading">Загружаю структуру ISIC Rev.5…</div>
					</div>
				}
				{ m_status_el =
					<div className="status">Для загрузки дерева требуется интернет.</div>
				}
			</section>
		);
		return m_view_el;
	}

	function SetTree(tree: IsicTree): void {
		m_tree = tree;

		const divisions_count = m_tree.sections.reduce((sum, section) => sum + section.divisions.length, 0);
		const groups_count = Object.keys(m_tree.groups_by_code).length;

		m_status_el.textContent =
			`Загружено: ${m_tree.sections.length} разделов, ${divisions_count} подразделений, ${groups_count} групп.`;

		_RenderTree();
	}

	function SetQuery(query: string): void {
		m_query = query.trim().toLowerCase();
		_RenderTree();
	}

	function SelectItem(item: IsicItem): void {
		m_selected_key = _GetItemKey(item);
		_HighlightSelected();
		_RevealInTree(item);
	}

	function ExpandAll(): void {
		for(const section of m_tree.sections) {
			m_open_nodes.add(`s:${section.code}`);

			for(const division of section.divisions) {
				m_open_nodes.add(`d:${division.code}`);
			}
		}
		m_nodes.forEach((node_el) => node_el.classList.add("open"));
	}

	function CollapseAll(): void {
		m_open_nodes.clear();
		m_nodes.forEach((node_el) => node_el.classList.remove("open"));
	}

	function ShowError(message: string): void {
		m_tree_el.replaceChildren(
			<div className="empty">
				{message}<br /><br />
				Проверьте интернет-соединение или откройте официальный классификатор ООН по ссылке ниже.
			</div>
		);
		m_status_el.textContent = "Ошибка загрузки данных.";
	}


	// ==========================================================
	// Helpers
	// ==========================================================

	// Unique key of an item: "s:A" for a section, "d:01" for a division, "g:011" for a group
	function _GetItemKey(item: IsicItem): string {
		if("divisions" in item) {
			return `s:${item.code}`;
		}
		if("groups" in item) {
			return `d:${item.code}`;
		}
		return `g:${item.code}`;
	}

	// Keys of the nodes that must be expanded to make the item visible
	function _GetRevealKeys(item: IsicItem): string[] {
		if("divisions" in item) {
			return [`s:${item.code}`];
		}
		if("groups" in item) {
			return [`d:${item.code}`, `s:${item.section}`];
		}
		return [`d:${item.division}`, `s:${item.section}`];
	}

	// Does the group match the search query
	function _GroupMatchesQuery(group: IsicGroup, division: IsicDivision, section: IsicSection): boolean {
		if(!m_query) {
			return true;
		}
		const example: GroupExample | undefined = EXAMPLES[group.code];
		const haystack = [
			group.code,
			group.en,
			example?.products,
			division.code,
			division.ru,
			section.ru
		].join(" ").toLowerCase();

		return haystack.includes(m_query);
	}

	// Does the division (or its section) match the search query
	function _DivisionMatchesQuery(division: IsicDivision, section: IsicSection): boolean {
		const haystack = [
			division.code,
			division.en,
			division.ru,
			section.code,
			section.ru
		].join(" ").toLowerCase();

		return haystack.includes(m_query);
	}


	// ==========================================================
	// Tree rendering
	// ==========================================================

	// Group row (level 3)
	function _RenderGroupButton(group: IsicGroup): HTMLElement {
		const example: GroupExample | undefined = EXAMPLES[group.code];
		const title = example?.products || group.en;

		const button_el: HTMLElement = (
			<button className="groupBtn" onclick={() => _Select(group)}>
				<span className="code">{group.code}</span>
				<span className="name">{title}</span>
			</button>
		);
		m_buttons.set(_GetItemKey(group), button_el);

		return button_el;
	}

	// Division block (level 2) with its groups
	function _RenderDivision(division: IsicDivision, visible_groups: IsicGroup[]): HTMLElement {
		const key = _GetItemKey(division);
		const open_class = m_open_nodes.has(key) ? "open" : "";

		const button_el: HTMLElement = (
			<button className="divisionBtn" onclick={() => _OnNodeClick(division, division_el)}>
				<span className="code">{division.code}</span>
				<span className="name">{division.ru}</span>
				<span className="chev">›</span>
			</button>
		);
		const division_el: HTMLElement = (
			<div className={`division ${open_class}`}>
				{button_el}
				<div className="groups">
					{visible_groups.map(_RenderGroupButton)}
				</div>
			</div>
		);
		m_buttons.set(key, button_el);
		m_nodes.set(key, division_el);

		return division_el;
	}

	// Section block (level 1) with its divisions
	function _RenderSection(section: IsicSection, division_els: HTMLElement[]): HTMLElement {
		const key = _GetItemKey(section);
		const open_class = m_open_nodes.has(key) ? "open" : "";

		const button_el: HTMLElement = (
			<button className="sectionBtn" onclick={() => _OnNodeClick(section, section_el)}>
				<span className="code">{section.code}</span>
				<span className="name">{section.ru}</span>
				<span className="chev">›</span>
			</button>
		);
		const section_el: HTMLElement = (
			<div className={`section ${open_class}`}>
				{button_el}
				<div className="children">
					{division_els}
				</div>
			</div>
		);
		m_buttons.set(key, button_el);
		m_nodes.set(key, section_el);

		return section_el;
	}

	// Full redraw of the tree (on data load and on search input)
	function _RenderTree(): void {
		m_buttons.clear();
		m_nodes.clear();

		let visible_groups_count = 0;
		const section_els: HTMLElement[] = [];

		for(const section of m_tree.sections) {
			const division_els: HTMLElement[] = [];

			for(const division of section.divisions) {
				const visible_groups = division.groups.filter(
					(group) => _GroupMatchesQuery(group, division, section)
				);

				// Hide the division if neither it nor its groups match the query
				if(m_query && visible_groups.length === 0 && !_DivisionMatchesQuery(division, section)) {
					continue;
				}

				visible_groups_count += visible_groups.length;
				division_els.push(_RenderDivision(division, visible_groups));
			}

			// Hide the section if nothing is left in it
			if(m_query && division_els.length === 0) {
				continue;
			}
			section_els.push(_RenderSection(section, division_els));
		}

		m_tree_el.replaceChildren(...section_els);
		_HighlightSelected();
	}

	// Highlights the selected row without redrawing the tree
	function _HighlightSelected(): void {
		if(m_active_el) {
			m_active_el.classList.remove("active");
			m_active_el = null;
		}

		const button_el = m_selected_key ? m_buttons.get(m_selected_key) : undefined;
		if(button_el) {
			button_el.classList.add("active");
			m_active_el = button_el;
		}
	}

	// Expands all branches leading to the item and scrolls to it
	function _RevealInTree(item: IsicItem): void {
		const button_el = m_buttons.get(_GetItemKey(item));

		if(!button_el) {
			return;   // the item is hidden by the current search filter
		}

		for(const key of _GetRevealKeys(item)) {
			m_open_nodes.add(key);

			const node_el = m_nodes.get(key);
			if(node_el) {
				node_el.classList.add("open");
			}
		}
		button_el.scrollIntoView({ block: "nearest", behavior: "smooth" });
	}


	// ==========================================================
	// User actions
	// ==========================================================

	// Click on a section or a division: expand / collapse it and select it
	function _OnNodeClick(item: IsicSection | IsicDivision, node_el: HTMLElement): void {
		const key = _GetItemKey(item);
		const is_open = node_el.classList.toggle("open");

		if(is_open) {
			m_open_nodes.add(key);
		} else {
			m_open_nodes.delete(key);
		}
		_Select(item);
	}

	// Select the item: highlight it and report to the owner. The tree is not redrawn.
	function _Select(item: IsicItem): void {
		m_selected_key = _GetItemKey(item);
		_HighlightSelected();
		handlers.OnSelect(item);
	}
}

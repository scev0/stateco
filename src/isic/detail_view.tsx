
import type {
	CompanyInfo,
	GroupExample,
	IsicDivision,
	IsicGroup,
	IsicItem,
	IsicSection,
} from "./types";
import { COMPANY_DATA } from "./company-data";
import { EXAMPLES } from "./examples";
import { PRODUCT_EXAMPLES } from "./product-examples";

export { DetailView };
export type { IDetailView, IDetailViewCallbacks };


/** Callbacks used by DetailView to report clicks on links inside the card */
interface IDetailViewCallbacks {
	/** A division link was clicked in a section card */
	OnGotoDivision(division_code: string): void;

	/** A group link was clicked in a division card */
	OnGotoGroup(group_code: string): void;

	GetSectionByCode(section_code: string): IsicSection;
}

/** Right column: card of the selected section, division or group */
interface IDetailView {
	/** Creates the column and returns its root element, the caller attaches it to the page */
	CreateView(): HTMLElement;

	/** Redraws the card for the given item; null restores the "nothing selected" placeholder */
	UpdateView(item: IsicItem | null): void;
}


/**
 * Right column: card of the selected section, division or group.
 *
 * Usage:
 *   const view = DetailView({ OnGotoDivision, OnGotoGroup });
 *   parent_el.appendChild(view.CreateView());
 *   view.UpdateView(group);    // when another item is selected
 *
 * @param callbacks  callbacks for the links inside the card
 */
function DetailView(callbacks: IDetailViewCallbacks): IDetailView {

	// Whether the "Products and services" block is expanded in a group card.
	// Kept here so the user's choice survives switching to another group.
	let m_products_open = true;

	// ----- Elements -----
	let m_view_el: HTMLElement;
	let m_title_el: HTMLElement;
	let m_body_el: HTMLElement;

	return {
		CreateView,
		UpdateView
	};


	// ==========================================================
	// Interface
	// ==========================================================

	function CreateView(): HTMLElement {
		m_view_el = (
			<aside className="panel detail">
				<div className="head">
					{ m_title_el =
						<h2 />
					}
				</div>
				{ m_body_el =
					<div className="detailBody" />
				}
			</aside>
		);
		_ShowPlaceholder();

		return m_view_el;
	}

	function UpdateView(item: IsicItem | null): void {
		if(item === null) {
			_ShowPlaceholder();

		} else if("divisions" in item) {
			_RenderSectionCard(item);

		} else if("groups" in item) {
			_RenderDivisionCard(item);

		} else {
			_RenderGroupCard(item);
		}
	}


	// ==========================================================
	// Helpers
	// ==========================================================

	// Companies of a group (level 3), sorted by market capitalization, largest first
	function _GetCompaniesForGroup(group_code: string): CompanyInfo[] {
		return COMPANY_DATA
			.filter((company) => company.isic_group === group_code)
			.sort((a, b) => b.cap - a.cap);
	}

	// Capitalization text: billions of USD to a readable string; private companies get "Оценка:" prefix
	function _FormatCap(cap_billion: number, estimated: boolean | undefined): string {
		let value_text: string;
		if(cap_billion >= 1000) {
			const trln = (cap_billion / 1000).toFixed(1).replace(/\.0$/, "");
			value_text = `$${trln} трлн`;
		} else {
			value_text = `$${cap_billion} млрд`;
		}
		return estimated ? `Оценка: ${value_text}` : value_text;
	}


	// ==========================================================
	// Card rendering
	// ==========================================================

	// Common part: set the title and the content of the card
	function _ShowDetail(title: string, nodes: HTMLElement[]): void {
		m_title_el.textContent = title;
		m_body_el.replaceChildren(...nodes);
	}

	// Initial state: nothing is selected
	function _ShowPlaceholder(): void {
		_ShowDetail("Карточка", [
			<div className="empty">
				Выберите раздел, подразделение или группу слева.<br /><br />
				Например: 252 — производство оружия и боеприпасов.
			</div>
		]);
	}

	// Section card (level 1): name, summary and the list of divisions
	function _RenderSectionCard(section: IsicSection): void {
		const groups_total = section.divisions.reduce((sum, division) => sum + division.groups.length, 0);

		// The division code is kept in the closure, not in an HTML attribute
		const division_links = section.divisions.map((division) => (
			<button className="groupLink" onclick={() => callbacks.OnGotoDivision(division.code)}>
				<span className="code">{division.code}</span>
				<span className="info">
					{division.ru}
					<small>{division.groups.length ? `Групп: ${division.groups.length}` : "Нет групп третьего уровня"}</small>
				</span>
			</button>
		));

		const divisions_block = division_links.length
			? division_links
			: [<p className="muted">В этом разделе нет подразделений.</p>];

		_ShowDetail(`Раздел ${section.code}`, [
			<h2>{section.ru}</h2>,
			<div className="official">{section.en}</div>,

			<h3>Состав раздела</h3>,
			<p className="muted">{`Подразделений: ${section.divisions.length}; групп: ${groups_total}`}</p>,

			<h3>{`Подразделения (${section.divisions.length})`}</h3>,
			...divisions_block
		]);
	}

	// Division card (level 2): name, section and the list of groups
	function _RenderDivisionCard(division: IsicDivision): void {
		const section = callbacks.GetSectionByCode(division.section);

		// The group code is kept in the closure, not in an HTML attribute
		const group_links = division.groups.map((group) => {
			const example: GroupExample | undefined = EXAMPLES[group.code];

			return (
				<button className="groupLink" onclick={() => callbacks.OnGotoGroup(group.code)}>
					<span className="code">{group.code}</span>
					<span className="info">
						{example?.products || group.en}
					</span>
				</button>
			);
		});

		const groups_block = group_links.length
			? group_links
			: [<p className="muted">В этом подразделении нет групп третьего уровня.</p>];

		_ShowDetail(`Подраздел ${section.code} / ${division.code}`, [
			<h2>{division.ru}</h2>,
			<div className="official">{division.en}</div>,

			<h3>Раздел</h3>,
			<p className="muted">{`${section.code} — ${section.ru}`}</p>,

			<h3>{`Группы в подразделении (${division.groups.length})`}</h3>,
			...groups_block
		]);
	}

	// Group card (level 3): examples of products and companies
	function _RenderGroupCard(group: IsicGroup): void {
		const example: GroupExample | undefined = EXAMPLES[group.code];

		const products_text = example?.products
			|| "Виды деятельности и результаты работ, перечисленные в официальном названии группы.";

		// Detailed list of examples if there is one, otherwise the short text
		const product_items: string[] | undefined = PRODUCT_EXAMPLES[group.code];
		const products_list = product_items
			? <ul>{product_items.map((item) => <li>{item}</li>)}</ul>
			: <ul><li>{products_text}</li></ul>;

		// Companies from COMPANY_DATA, sorted by capitalization
		const companies = _GetCompaniesForGroup(group.code);

		const companies_block = companies.length > 0
			? (
				<ul>
					{companies.map((company) => (
						<li>
							<b>{company.name}</b>{" "}
							<small>{`${company.country} · ${_FormatCap(company.cap, company.estimated)}`}</small>
						</li>
					))}
				</ul>
			)
			: <p className="muted">Для этой группы компании пока не подобраны.</p>;

		// Remember whether the "Products and services" block is expanded or collapsed
		const products_el: HTMLDetailsElement = (
			<details className="collapsible" open={m_products_open}
				ontoggle={() => { m_products_open = products_el.open; }}>
				<summary>Примеры продукции и услуг</summary>
				{products_list}
			</details>
		);

		_ShowDetail(`Группа ${group.section} / ${group.division} / ${group.code}`, [
			<h2>{example?.products || group.en}</h2>,
			<div className="official">{group.en}</div>,

			products_el,

			<details className="collapsible" open={companies.length > 0}>
				<summary>Примеры компаний</summary>
				{companies_block}
			</details>
		]);
	}
}


import type { IsicItem, IsicTree } from "./types";
import { DetailView } from "./detail_view";
import type { IDetailView } from "./detail_view";
import { IsicTreeView } from "./isic_tree_view";
import type { IIsicTreeView } from "./isic_tree_view";
import { IsicStructureLoader } from "./isic_structure_loader";

import { Resizer } from "../view-utils";
import type { IResizer } from "../view-utils";

// import isic_structure_url from "./isic_structure.dat";

export { Classifier };
export type { IClassifier };


/** ISIC Rev.5 classifier page */
interface IClassifier {
	/** Creates the page and subscribes to the events */
	Init(): void;

	/** Loads the classifier structure and shows the tree */
	Run(): Promise<void>;
}


/**
 * Interactive ISIC Rev.5 classifier: tree (section > division > group),
 * search and the card of the selected item.
 *
 * @param root_el  element to render the page into (usually document.body)
 */
function Classifier(root_el: HTMLElement): IClassifier {

	// Loaded tree: sections > divisions > groups, with lookup by code
	let m_tree: IsicTree = {
		sections: [],
		sections_by_code: {},
		divisions_by_code: {},
		groups_by_code: {}
	};

	let m_isic_structure_loader = IsicStructureLoader();

	// ----- Elements and views -----
	let m_search_el: HTMLInputElement;
	let m_tree_view: IIsicTreeView;      // left column
	let m_detail_view: IDetailView;      // right column

	const MIN_LEFT_COLUMN_WIDTH = 280;
	const MIN_RIGHT_COLUMN_WIDTH = 290;


	return {
		Init,
		Run
	};


	// ==========================================================
	// Interface
	// ==========================================================

	// Creates the page skeleton and subscribes to the events
	function Init(): void {
		// A click in the tree shows the card of the clicked item
		m_tree_view = IsicTreeView({
			OnSelect: (item) => m_detail_view.UpdateView(item)
		});

		// A link in the card selects the item and shows it in the tree
		m_detail_view = DetailView({
			OnGotoDivision: (division_code) => _GotoItem(m_tree.divisions_by_code[division_code]),
			OnGotoGroup: (group_code) => _GotoItem(m_tree.groups_by_code[group_code]),
			GetSectionByCode: (section_code) => m_tree.sections_by_code[section_code],
		});

		let tree_panel_el: HTMLElement;
		let resizer: IResizer; // Splitter: drag with the mouse to change the width of the left column
		let layout_el: HTMLElement;

		const header_el: HTMLElement = (
			<header>
				<h1>ISIC Rev.5 — классификатор видов экономической деятельности</h1>
				<p>
					Интерактивная структура: раздел → подразделение (2 цифры) → группа (3 цифры).
					Нажмите на раздел, двузначное подразделение или трёхзначную группу, чтобы открыть карточку
					с описанием, примерами продукции, услуг и компаний.
				</p>
			</header>
		);

		const main_el: HTMLElement = (
			<main>
				<div className="toolbar">
					{ m_search_el =
						<input type="search"
							placeholder="Поиск по коду или названию: 252, нефть, программирование…"
							oninput={() => m_tree_view.SetQuery(m_search_el.value)} />
					}
					<button className="btn" onclick={() => m_tree_view.ExpandAll()}>Развернуть всё</button>
					<button className="btn" onclick={() => m_tree_view.CollapseAll()}>Свернуть всё</button>
				</div>

				<div className="stats">
					<span>22 раздела</span>
					<span>87 подразделений</span>
					<span>258 групп</span>
					<span>Показаны уровни 1–3</span>
				</div>

				{ layout_el =
					<div className="layout">
						{ tree_panel_el =
							m_tree_view.CreateView() }
						{ resizer =
							<Resizer
								min_left_width={MIN_LEFT_COLUMN_WIDTH}
								min_right_width={MIN_RIGHT_COLUMN_WIDTH} />
						}
						{ m_detail_view.CreateView() }
					</div>
				}

				<p className="note">
					Важно: ISIC классифицирует виды деятельности, а не компании целиком и не отдельные товары.
					У диверсифицированной группы разные подразделения могут относиться к разным кодам.
					Компании ниже — ориентировочные примеры, а не официальное присвоение кодов ООН.
				</p>
				<p className="note">
					Источник структуры:{" "}
					<a href="https://unstats.un.org/unsd/classifications/Econ/" target="_blank" rel="noopener">UN Statistics Division — ISIC Rev.5</a>.
					Дерево загружается из машиночитаемой копии, построенной на официальном файле ООН.
					Подборка компаний — независимый справочный материал.
				</p>
			</main>
		);

		root_el.appendChild(header_el);
		root_el.appendChild(main_el);

		resizer.SetLayoutAndLeftPanelElems(layout_el, tree_panel_el);
	}

	// Loads the classifier structure and shows the tree
	async function Run(): Promise<void> {
		try {
			await m_isic_structure_loader.Load();
			m_tree = m_isic_structure_loader.GetTree();
			m_tree_view.SetTree(m_tree);

		} catch(error: unknown) {
			const message = error instanceof Error ? error.message : String(error);

			m_tree_view.ShowError(message);
		}
	}


	// ==========================================================
	// Helpers
	// ==========================================================

	// Selects the item in the tree (expanding its branches) and shows its card
	function _GotoItem(item: IsicItem): void {
		m_tree_view.SelectItem(item);
		m_detail_view.UpdateView(item);
	}
}

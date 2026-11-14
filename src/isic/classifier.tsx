
import type {
	CompanyInfo,
	GroupExample,
	IsicDivision,
	IsicGroup,
	IsicSection,
	IsicTree,
	SelectedItem
} from "./types";
import { COMPANY_DATA } from "./company-data";
import { EXAMPLES } from "./examples";
import { PRODUCT_EXAMPLES } from "./product-examples";
import { Resizer } from "./resizer";
import { BuildTree, ParseRows } from "./structure";

import isic_structure_url from "./isic_structure.dat";

export { Classifier };


/**
 * Интерактивный классификатор ISIC Rev.5: дерево (раздел → подразделение → группа),
 * поиск и карточка выбранного элемента.
 *
 * @param root_el  элемент, в который выводится страница (обычно document.body)
 */
function Classifier(root_el: HTMLElement) {

	// ----- Состояние -----

	// Дерево: разделы → подразделения → группы, и быстрый доступ по коду
	let m_tree: IsicTree = {
		sections: [],
		sections_by_code: {},
		divisions_by_code: {},
		groups_by_code: {}
	};

	// Какой элемент выбран сейчас (или null)
	let m_selected: SelectedItem | null = null;

	// Раскрыт ли блок «Примеры продукции и услуг» в карточке группы.
	// Хранится отдельно, чтобы выбор пользователя сохранялся при переходе к другой группе.
	let m_products_open = true;

	// Какие узлы дерева раскрыты. Ключи вида "s:A" (раздел) и "d:01" (подразделение).
	// Хранится отдельно от DOM, чтобы раскрытые ветки не терялись при перерисовке (например, при поиске).
	const m_open_nodes = new Set<string>();

	// ----- Элементы страницы -----
	let m_search_el: HTMLInputElement;
	let m_tree_el: HTMLElement;
	let m_count_el: HTMLElement;
	let m_status_el: HTMLElement;
	let m_detail_el: HTMLElement;
	let m_detail_title_el: HTMLElement;
	let m_detail_level_el: HTMLElement;

	return {
		Init,
		Run
	};


	// ==========================================================
	// Создание страницы и загрузка данных
	// ==========================================================

	// Создание каркаса страницы и подключение обработчиков событий
	function Init(): void {
		m_search_el = <input id="search" type="search" placeholder="Поиск по коду или названию: 252, нефть, программирование…" oninput={RenderTree} />;
		m_count_el = <small id="count">Загрузка…</small>;
		m_tree_el = (
			<div className="tree" id="tree">
				<div className="loading">Загружаю структуру ISIC Rev.5…</div>
			</div>
		);
		m_status_el = <div className="status" id="status">Для загрузки дерева требуется интернет.</div>;
		m_detail_title_el = <h2 id="detailTitle">Карточка</h2>;
		m_detail_level_el = <small id="detailLevel">Уровни 1–3</small>;
		m_detail_el = (
			<div className="detailBody" id="detail">
				<div className="empty">
					Выберите раздел, подразделение или группу слева.<br /><br />
					Например: 252 — производство оружия и боеприпасов.
				</div>
			</div>
		);

		// Разделитель: потяните мышью, чтобы изменить ширину левой колонки
		const resizer_el: HTMLElement = (
			<div className="resizer" id="resizer" aria-orientation="vertical"
				title="Потяните, чтобы изменить ширину колонки" />
		);
		resizer_el.setAttribute("role", "separator");

		// Левая колонка: дерево классификатора
		const tree_panel_el: HTMLElement = (
			<section className="panel">
				<div className="head">
					<h2>Дерево классификатора</h2>
					{m_count_el}
				</div>
				{m_tree_el}
				{m_status_el}
			</section>
		);

		// Правая колонка: карточка раздела / подразделения / группы
		const detail_panel_el: HTMLElement = (
			<aside className="panel detail">
				<div className="head">
					{m_detail_title_el}
					{m_detail_level_el}
				</div>
				{m_detail_el}
			</aside>
		);

		const layout_el: HTMLElement = (
			<div className="layout">
				{tree_panel_el}
				{resizer_el}
				{detail_panel_el}
			</div>
		);

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
					{m_search_el}
					<button className="btn" id="expand" onclick={ExpandAll}>Развернуть всё</button>
					<button className="btn" id="collapse" onclick={CollapseAll}>Свернуть всё</button>
				</div>

				<div className="stats">
					<span>22 раздела</span>
					<span>87 подразделений</span>
					<span>258 групп</span>
					<span>Показаны уровни 1–3</span>
				</div>

				{layout_el}

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

		// Клики по дереву и по ссылкам внутри карточки (делегирование: один обработчик на всё)
		m_tree_el.addEventListener("click", OnTreeClick);
		m_detail_el.addEventListener("click", OnDetailClick);

		// Запоминаем, раскрыт или свёрнут блок «Примеры продукции и услуг».
		// Событие toggle не всплывает, поэтому слушаем на фазе перехвата.
		m_detail_el.addEventListener("toggle", OnDetailToggle, true);

		Resizer(layout_el, resizer_el, tree_panel_el).Init();
	}

	// Загрузка структуры классификатора и первая отрисовка дерева
	async function Run(): Promise<void> {
		try {
			const structure_response = await fetch(isic_structure_url);

			if(!structure_response.ok) {
				throw new Error("Не удалось загрузить дерево классификатора.");
			}

			const rows = ParseRows(await structure_response.text());
			if(rows.length === 0) {
				throw new Error("Не удалось разобрать структуру.");
			}

			m_tree = BuildTree(rows);

			const divisions_count = m_tree.sections.reduce((sum, section) => sum + section.divisions.length, 0);
			const groups_count = Object.keys(m_tree.groups_by_code).length;

			m_status_el.textContent =
				`Загружено: ${m_tree.sections.length} разделов, ${divisions_count} подразделений, ${groups_count} групп.`;

			RenderTree();

		} catch(error: unknown) {
			const message = error instanceof Error ? error.message : String(error);

			m_tree_el.replaceChildren(
				<div className="empty">
					{message}<br /><br />
					Проверьте интернет-соединение или откройте официальный классификатор ООН по ссылке ниже.
				</div>
			);
			m_status_el.textContent = "Ошибка загрузки данных.";
		}
	}


	// ==========================================================
	// Вспомогательные функции
	// ==========================================================

	// Компании для группы (уровень 3), отсортированные по капитализации по убыванию
	function GetCompaniesForGroup(group_code: string): CompanyInfo[] {
		return COMPANY_DATA
			.filter((company) => company.isic_group === group_code)
			.sort((a, b) => b.cap - a.cap);
	}

	// Формат капитализации: из млрд $ делаем удобную строку; для частных добавляем «Оценка»
	function FormatCap(cap_billion: number, estimated: boolean | undefined): string {
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
	// Отрисовка дерева (левая колонка)
	// ==========================================================

	// Подходит ли группа под поисковый запрос
	function GroupMatchesQuery(group: IsicGroup, division: IsicDivision, section: IsicSection, query: string): boolean {
		if(!query) {
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

		return haystack.includes(query);
	}

	// Подходит ли подразделение (или его раздел) под поисковый запрос
	function DivisionMatchesQuery(division: IsicDivision, section: IsicSection, query: string): boolean {
		const haystack = [
			division.code,
			division.en,
			division.ru,
			section.code,
			section.ru
		].join(" ").toLowerCase();

		return haystack.includes(query);
	}

	// Кнопка группы (уровень 3)
	function RenderGroupButton(group: IsicGroup): HTMLElement {
		const example: GroupExample | undefined = EXAMPLES[group.code];
		const title = example?.products || group.en;

		return (
			<button className="groupBtn" data-g={group.code}>
				<span className="code">{group.code}</span>
				<span className="name">{title}</span>
			</button>
		);
	}

	// Блок подразделения (уровень 2) с вложенными группами
	function RenderDivision(division: IsicDivision, visible_groups: IsicGroup[]): HTMLElement {
		const node_key = `d:${division.code}`;
		const open_class = m_open_nodes.has(node_key) ? "open" : "";

		return (
			<div className={`division ${open_class}`} data-node={node_key}>
				<button className="divisionBtn" data-d={division.code}>
					<span className="code">{division.code}</span>
					<span className="name">{division.ru}</span>
					<span className="chev">›</span>
				</button>
				<div className="groups">
					{visible_groups.map(RenderGroupButton)}
				</div>
			</div>
		);
	}

	// Блок раздела (уровень 1) с вложенными подразделениями
	function RenderSection(section: IsicSection, division_els: HTMLElement[]): HTMLElement {
		const node_key = `s:${section.code}`;
		const open_class = m_open_nodes.has(node_key) ? "open" : "";

		return (
			<div className={`section ${open_class}`} data-node={node_key}>
				<button className="sectionBtn" data-s={section.code}>
					<span className="code">{section.code}</span>
					<span className="name">{section.ru}</span>
					<span className="chev">›</span>
				</button>
				<div className="children">
					{division_els}
				</div>
			</div>
		);
	}

	// Полная перерисовка дерева (при загрузке данных и при вводе в поиск)
	function RenderTree(): void {
		const query = m_search_el.value.trim().toLowerCase();
		let visible_groups_count = 0;
		const section_els: HTMLElement[] = [];

		for(const section of m_tree.sections) {
			const division_els: HTMLElement[] = [];

			for(const division of section.divisions) {
				const visible_groups = division.groups.filter(
					(group) => GroupMatchesQuery(group, division, section, query)
				);

				// Скрываем подразделение, если под запрос не подошло ни оно, ни его группы
				if(query && visible_groups.length === 0 && !DivisionMatchesQuery(division, section, query)) {
					continue;
				}

				visible_groups_count += visible_groups.length;
				division_els.push(RenderDivision(division, visible_groups));
			}

			// Скрываем раздел, если в нём ничего не осталось
			if(query && division_els.length === 0) {
				continue;
			}
			section_els.push(RenderSection(section, division_els));
		}

		m_tree_el.replaceChildren(...section_els);
		m_count_el.textContent = `${visible_groups_count} групп в выдаче`;
		HighlightSelected();
	}

	// Подсветка выбранного элемента без перерисовки дерева
	function HighlightSelected(): void {
		m_tree_el.querySelectorAll("button.active").forEach((button) => button.classList.remove("active"));

		if(!m_selected) {
			return;
		}
		const attributes: Record<number, string> = { 1: "data-s", 2: "data-d", 3: "data-g" };
		const attribute = attributes[m_selected.level];
		const button = m_tree_el.querySelector(`button[${attribute}="${m_selected.code}"]`);

		if(button) {
			button.classList.add("active");
		}
	}

	// Раскрыть / свернуть один узел дерева (раздел или подразделение)
	function ToggleNode(node_el: HTMLElement): void {
		const key = node_el.dataset.node;
		const is_open = node_el.classList.toggle("open");

		if(key) {
			if(is_open) {
				m_open_nodes.add(key);
			} else {
				m_open_nodes.delete(key);
			}
		}
	}

	// Раскрыть все ветки, ведущие к кнопке (подразделения "data-d" или группы "data-g"),
	// и прокрутить страницу к ней
	function RevealInTree(attribute: string, code: string): void {
		const button = m_tree_el.querySelector<HTMLElement>(`button[${attribute}="${code}"]`);

		if(!button) {
			return;   // элемент скрыт текущим поисковым фильтром
		}

		for(let el = button.parentElement; el && el !== m_tree_el; el = el.parentElement) {
			if(el.dataset.node) {
				el.classList.add("open");
				m_open_nodes.add(el.dataset.node);
			}
		}
		button.scrollIntoView({ block: "nearest", behavior: "smooth" });
	}

	function ExpandAll(): void {
		for(const section of m_tree.sections) {
			m_open_nodes.add(`s:${section.code}`);
			for(const division of section.divisions) {
				m_open_nodes.add(`d:${division.code}`);
			}
		}
		m_tree_el.querySelectorAll(".section, .division").forEach((el) => el.classList.add("open"));
	}

	function CollapseAll(): void {
		m_open_nodes.clear();
		m_tree_el.querySelectorAll(".section, .division").forEach((el) => el.classList.remove("open"));
	}


	// ==========================================================
	// Карточка (правая колонка)
	// ==========================================================

	// Общая функция: вывести заголовок и содержимое карточки
	function ShowDetail(title: string, level: string, nodes: HTMLElement[]): void {
		m_detail_title_el.textContent = title;
		m_detail_level_el.textContent = level;
		m_detail_el.replaceChildren(...nodes);
	}

	// Карточка раздела (уровень 1): название, состав и список подразделений
	function RenderSectionCard(section: IsicSection): void {
		const groups_total = section.divisions.reduce((sum, division) => sum + division.groups.length, 0);

		const division_links = section.divisions.map((division) => (
			<button className="groupLink" data-goto-division={division.code}>
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

		ShowDetail(`Раздел ${section.code}`, "Уровень 1", [
			<h2>{section.ru}</h2>,
			<div className="official">{section.en}</div>,

			<h3>Состав раздела</h3>,
			<p className="muted">{`Подразделений: ${section.divisions.length}; групп: ${groups_total}`}</p>,

			<h3>{`Подразделения (${section.divisions.length})`}</h3>,
			...divisions_block
		]);
	}

	// Карточка подразделения (уровень 2): название, раздел и список групп
	function RenderDivisionCard(division: IsicDivision): void {
		const section = m_tree.sections_by_code[division.section];

		const group_links = division.groups.map((group) => {
			const example: GroupExample | undefined = EXAMPLES[group.code];

			return (
				<button className="groupLink" data-goto-group={group.code}>
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

		ShowDetail(`Подраздел ${section.code} / ${division.code}`, "Уровень 2", [
			<h2>{division.ru}</h2>,
			<div className="official">{division.en}</div>,

			<h3>Раздел</h3>,
			<p className="muted">{`${section.code} — ${section.ru}`}</p>,

			<h3>{`Группы в подразделении (${division.groups.length})`}</h3>,
			...groups_block
		]);
	}

	// Карточка группы (уровень 3): примеры продукции и компаний
	function RenderGroupCard(group: IsicGroup): void {
		const example: GroupExample | undefined = EXAMPLES[group.code];

		const products_text = example?.products
			|| "Виды деятельности и результаты работ, перечисленные в официальном названии группы.";

		// Подробный список примеров, если он есть; иначе прежний короткий текст
		const product_items: string[] | undefined = PRODUCT_EXAMPLES[group.code];
		const products_list = product_items
			? <ul>{product_items.map((item) => <li>{item}</li>)}</ul>
			: <ul><li>{products_text}</li></ul>;

		// Компании из COMPANY_DATA, отсортированные по капитализации
		const companies = GetCompaniesForGroup(group.code);

		const companies_block = companies.length > 0
			? (
				<ul>
					{companies.map((company) => (
						<li>
							<b>{company.name}</b>{" "}
							<small>{`${company.country} · ${FormatCap(company.cap, company.estimated)}`}</small>
						</li>
					))}
				</ul>
			)
			: <p className="muted">Для этой группы компании пока не подобраны.</p>;

		ShowDetail(`Группа ${group.section} / ${group.division} / ${group.code}`, "Уровень 3", [
			<h2>{example?.products || group.en}</h2>,
			<div className="official">{group.en}</div>,

			<details className="collapsible" data-products="" open={m_products_open}>
				<summary>Примеры продукции и услуг</summary>
				{products_list}
			</details>,

			<details className="collapsible" data-companies="" open={companies.length > 0}>
				<summary>Примеры компаний</summary>
				{companies_block}
			</details>
		]);
	}


	// ==========================================================
	// Выбор элементов
	// ==========================================================

	// Клик по разделу: карточка показывается и при раскрытии, и при сворачивании
	function SelectSection(code: string): void {
		m_selected = { level: 1, code };
		HighlightSelected();
		RenderSectionCard(m_tree.sections_by_code[code]);
	}

	// Клик по подразделению: карточка показывается и при раскрытии, и при сворачивании
	function SelectDivision(code: string, reveal: boolean = false): void {
		m_selected = { level: 2, code };
		HighlightSelected();
		RenderDivisionCard(m_tree.divisions_by_code[code]);

		if(reveal) {
			RevealInTree("data-d", code);
		}
	}

	// Клик по группе: дерево НЕ перерисовывается и НЕ сворачивается
	function SelectGroup(code: string, reveal: boolean = false): void {
		m_selected = { level: 3, code };
		HighlightSelected();
		RenderGroupCard(m_tree.groups_by_code[code]);

		if(reveal) {
			RevealInTree("data-g", code);
		}
	}


	// ==========================================================
	// Обработчики событий
	// ==========================================================

	// Клики по дереву
	function OnTreeClick(event: MouseEvent): void {
		const target = event.target as Element | null;
		const button = target ? target.closest("button") : null;
		if(!button) {
			return;
		}

		if(button.dataset.s) {
			ToggleNode(button.parentElement as HTMLElement);   // раздел: раскрыть / свернуть
			SelectSection(button.dataset.s);                   // и показать карточку

		} else if(button.dataset.d) {
			ToggleNode(button.parentElement as HTMLElement);   // подразделение: раскрыть / свернуть
			SelectDivision(button.dataset.d);                  // и показать карточку

		} else if(button.dataset.g) {
			SelectGroup(button.dataset.g);                     // группа: только карточка
		}
	}

	// Клики по ссылкам внутри карточки
	function OnDetailClick(event: MouseEvent): void {
		const target = event.target as Element | null;
		if(!target) {
			return;
		}

		// Клик по группе в карточке подразделения: открыть её карточку и показать в дереве
		const group_link = target.closest<HTMLElement>("[data-goto-group]");
		if(group_link && group_link.dataset.gotoGroup) {
			SelectGroup(group_link.dataset.gotoGroup, true);
			return;
		}

		// Клик по подразделению в карточке раздела: открыть его карточку и показать в дереве
		const division_link = target.closest<HTMLElement>("[data-goto-division]");
		if(division_link && division_link.dataset.gotoDivision) {
			SelectDivision(division_link.dataset.gotoDivision, true);
		}
	}

	// Запоминаем, раскрыт или свёрнут блок «Примеры продукции и услуг»
	function OnDetailToggle(event: Event): void {
		const target = event.target as HTMLElement | null;

		if(target && target.matches("details[data-products]")) {
			m_products_open = (target as HTMLDetailsElement).open;
		}
	}
}

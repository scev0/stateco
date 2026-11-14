
export type {
	IsicRow,
	IsicGroup,
	IsicDivision,
	IsicSection,
	IsicTree,
	GroupExample,
	CompanyInfo,
	SelectedItem,
};


/** Строка структуры классификатора из исходного файла: ["01", "Crop and animal production"] */
interface IsicRow {
	code: string;
	en: string;
}

/** Группа (уровень 3, три цифры) */
interface IsicGroup {
	code: string;
	en: string;
	division: string;   // код подразделения, например "01"
	section: string;    // код раздела, например "A"
}

/** Подразделение (уровень 2, две цифры) */
interface IsicDivision {
	code: string;
	en: string;
	ru: string;
	section: string;    // код раздела
	groups: IsicGroup[];
}

/** Раздел (уровень 1, буква) */
interface IsicSection {
	code: string;
	en: string;
	ru: string;
	divisions: IsicDivision[];
}

/** Дерево классификатора и быстрый доступ к узлам по коду */
interface IsicTree {
	sections: IsicSection[];
	sections_by_code: Record<string, IsicSection>;
	divisions_by_code: Record<string, IsicDivision>;
	groups_by_code: Record<string, IsicGroup>;
}

/** Краткое описание группы: продукция и примеры компаний */
interface GroupExample {
	products: string;
	companies: string[];
}

/** Запись справочника компаний. cap — капитализация, млрд долл. США; estimated — оценка для непубличных */
interface CompanyInfo {
	name: string;
	country: string;
	cap: number;
	estimated?: boolean;
	isic_group: string;   // трёхзначный код группы ISIC
}

/** Выбранный элемент дерева: уровень 1 (раздел), 2 (подразделение) или 3 (группа) */
interface SelectedItem {
	level: 1 | 2 | 3;
	code: string;
}

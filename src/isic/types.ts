
export type {
	IsicRow,
	IsicGroup,
	IsicDivision,
	IsicSection,
	IsicTree,
	IsicItem,
	GroupExample,
	CompanyInfo,
	SelectedItem,
};


/** A row of the classifier structure file: ["01", "Crop and animal production"] */
interface IsicRow {
	code: string;
	en: string;
}

/** Group (level 3, three digits) */
interface IsicGroup {
	code: string;
	en: string;
	division: string;   // division code, for example "01"
	section: string;    // section code, for example "A"
}

/** Division (level 2, two digits) */
interface IsicDivision {
	code: string;
	en: string;
	ru: string;
	section: string;    // section code
	groups: IsicGroup[];
}

/** Section (level 1, a letter) */
interface IsicSection {
	code: string;
	en: string;
	ru: string;
	divisions: IsicDivision[];
}

/** Classifier tree and quick lookup of its nodes by code */
interface IsicTree {
	sections: IsicSection[];
	sections_by_code: Record<string, IsicSection>;
	divisions_by_code: Record<string, IsicDivision>;
	groups_by_code: Record<string, IsicGroup>;
}

/** Short description of a group: products and example companies */
interface GroupExample {
	products: string;
	companies: string[];
}

/** Company directory record. cap: market capitalization, billion USD; estimated: an estimate for private companies */
interface CompanyInfo {
	name: string;
	country: string;
	cap: number;
	estimated?: boolean;
	isic_group: string;   // three-digit ISIC group code
}

/** Selected tree item: level 1 (section), 2 (division) or 3 (group) */
interface SelectedItem {
	level: 1 | 2 | 3;
	code: string;
}

/** Any item of the classifier tree: a section, a division or a group */
type IsicItem = IsicSection | IsicDivision | IsicGroup;

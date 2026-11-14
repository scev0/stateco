
import type { IsicDivision, IsicGroup, IsicRow, IsicSection, IsicTree } from "./types";
import { SECTION_NAMES_RU, DIVISION_NAMES_RU } from "./names-ru";

export { ParseRows, BuildTree };


/**
 * Разбор TypeScript-файла со структурой: строки вида ["01", "Crop and animal production"],
 *
 * @param text  текст файла со структурой
 */
function ParseRows(text: string): IsicRow[] {
	const rows: IsicRow[] = [];
	const lines = text.trim().split(/\r?\n/);

	lines.forEach(line => {
		const matches = line.match(/"([^"]*)"/g);
		if (matches && matches.length >= 2) {
			rows.push({
				code: matches[0].replace(/"/g, ''),
				en: matches[1].replace(/"/g, '')
			});
		}
	});

	return rows;
}

/**
 * Построение дерева по длине кода: 1 символ — раздел, 2 — подразделение, 3 — группа
 *
 * @param rows  строки структуры в порядке следования в исходном файле
 */
function BuildTree(rows: IsicRow[]): IsicTree {
	const tree: IsicTree = {
		sections: [],
		sections_by_code: {},
		divisions_by_code: {},
		groups_by_code: {}
	};
	let current_section: IsicSection | null = null;
	let current_division: IsicDivision | null = null;

	for(const row of rows) {
		if(row.code.length === 1) {
			current_section = {
				code: row.code,
				en: row.en,
				ru: SECTION_NAMES_RU[row.code] || row.en,
				divisions: []
			};
			current_division = null;
			tree.sections.push(current_section);
			tree.sections_by_code[current_section.code] = current_section;

		} else if(row.code.length === 2 && current_section) {
			current_division = {
				code: row.code,
				en: row.en,
				ru: DIVISION_NAMES_RU[row.code] || row.en,
				section: current_section.code,
				groups: []
			};
			current_section.divisions.push(current_division);
			tree.divisions_by_code[current_division.code] = current_division;

		} else if(row.code.length === 3 && current_division && current_section) {
			const group: IsicGroup = {
				code: row.code,
				en: row.en,
				division: current_division.code,
				section: current_section.code
			};
			current_division.groups.push(group);
			tree.groups_by_code[group.code] = group;
		}
	}
	return tree;
}

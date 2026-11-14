
const fs = require('fs/promises');
const path = require('path');

// Машиночитаемая копия структуры ISIC Rev.5, построенная на официальном файле ООН
const STRUCTURE_URL = 'https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/ISIC_Rev_5_english_structure.csv';

async function fetchIsicStructure(url) {
	try {
		const structure_response = await fetch(url);

		if(!structure_response.ok) {
			throw new Error(`Не удалось загрузить дерево классификатора: ${response.status}`);
		}

		const csv_text = await structure_response.text();
		const lines = csv_text.trim().split(/\r?\n/);
		// Все строки, кроме первой (заголовка)
		const data = lines.slice(1);
		// Склеиваем массив обратно в текст с переносами строк
		const content_to_save = data.join('\n');

		const output_path = path.join(__dirname, '..', 'src/isic', 'isic_structure.dat');
		await fs.writeFile(output_path, content_to_save, 'utf8');
		console.log(`Успешно сохранено ${data.length} строк в файл: ${output_path}`);
	} catch (error) {
	  console.error('Ошибка:', error.message);
	}
}

fetchIsicStructure(STRUCTURE_URL);

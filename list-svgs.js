import fs from 'fs';
import path from 'path';

const BASE_PATH = './static';
const SVG_DIR = '/alfabeti-africani';
const OUT_PATH = './src/lib/letters.json';

(async () => {
	try {
		// Data object
		const data = {};

		// Reading folders
		const folders = await fs.promises.readdir(path.join(BASE_PATH, SVG_DIR));
		for (const folderName of folders) {
			data[folderName] = [];
			const folderPath = path.join(BASE_PATH, SVG_DIR, folderName);
			const symbols = await fs.promises.readdir(folderPath);
			for (const symbolName of symbols) {
				data[folderName].push(path.join(SVG_DIR, folderName, symbolName));
			}
		}

		// Writing data
		fs.writeFile(OUT_PATH, JSON.stringify(data), (error) => {
			if (error) throw error;
		});
	} catch (e) {
		console.error("We've thrown! Whoops!", e);
	}
})();

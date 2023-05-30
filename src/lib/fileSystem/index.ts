export async function isDirectoryPickerAvailable() {
	const KEY = 'showDirectoryPicker';
	return window && KEY in window && typeof window[KEY] === 'function';
}

export async function askDirectory() {
	if (!isDirectoryPickerAvailable()) return;
	return await window.showDirectoryPicker();
}

export enum FileSystemItemKind {
	Directory = 'directory',
	File = 'file',
	FileDataUrl = 'fileDataUrl'
}

export type FileItem = {
	kind: FileSystemItemKind.File;
	name: string;
	value: File;
};

export type FileDataUrlItem = {
	kind: FileSystemItemKind.FileDataUrl;
	name: string;
	value: string;
};

export type DirectoryItem = {
	kind: FileSystemItemKind.Directory;
	name: string;
	value: Array<DirectoryItem | FileItem | FileDataUrlItem>;
};

export const defaultDirectoryItem: DirectoryItem = {
	kind: FileSystemItemKind.Directory,
	name: 'root',
	value: []
};

async function readFileAsDataURL(file: File): Promise<string> {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => {
			resolve(reader.result as string);
		};
		reader.readAsDataURL(file);
	});
}

async function fileItemToDataUrl(fileItem: FileItem): Promise<FileDataUrlItem> {
	return {
		kind: FileSystemItemKind.FileDataUrl,
		name: fileItem.name,
		value: await readFileAsDataURL(fileItem.value)
	};
}

export async function listAllFilesAndDirs(
	directoryHandle: FileSystemDirectoryHandle,
	makeDataUrls = false,
	filter: Array<string> = [],
	root: DirectoryItem = defaultDirectoryItem
): Promise<DirectoryItem> {
	for await (const [name, handle] of directoryHandle) {
		if (handle.kind === 'directory') {
			const dir: DirectoryItem = {
				kind: FileSystemItemKind.Directory,
				name,
				value: []
			};
			root.value.push(dir);
			await listAllFilesAndDirs(handle, makeDataUrls, filter, dir);
		} else {
			if (filter.includes(name)) continue;
			const file: FileItem = {
				kind: FileSystemItemKind.File,
				name,
				value: await handle.getFile()
			};
			root.value.push(makeDataUrls ? await fileItemToDataUrl(file) : file);
		}
	}
	return root;
}

// export async function openDirectory(): Promise<DirectoryItem | null> {
// 	const directoryHandle = await askDirectory();
// 	if (!directoryHandle) return null;
// 	return await listAllFilesAndDirs(directoryHandle);
// }

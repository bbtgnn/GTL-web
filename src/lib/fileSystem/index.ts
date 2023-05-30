export async function isDirectoryPickerAvailable() {
	const KEY = 'showDirectoryPicker';
	return window && KEY in window && typeof window[KEY] === 'function';
}

export async function askDirectory() {
	if (!isDirectoryPickerAvailable()) return;
	return await window.showDirectoryPicker();
}

export type DirectoryStructure = {
	[key: string]: DirectoryStructure | File;
};

export async function listAllFilesAndDirs(
	directoryHandle: FileSystemDirectoryHandle,
	root: DirectoryStructure = {}
): Promise<DirectoryStructure> {
	for await (const [name, handle] of directoryHandle) {
		if (handle.kind === 'directory') {
			root[name] = {} as DirectoryStructure;
			await listAllFilesAndDirs(handle, root[name] as DirectoryStructure);
		} else {
			root[name] = await handle.getFile();
		}
	}
	return root;
}

export async function openDirectory(): Promise<DirectoryStructure | null> {
	const directoryHandle = await askDirectory();
	if (!directoryHandle) return null;
	return await listAllFilesAndDirs(directoryHandle);
}

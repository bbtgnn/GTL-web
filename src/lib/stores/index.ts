import { writable as lsWritable, persisted } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';
import type { Syntax, GlyphInput } from '$lib/types';
import type { FontMetrics } from '$lib/GTL/createFont';
import { type DirectoryItem, defaultDirectoryItem } from '$lib/fileSystem';

export const syntaxes = lsWritable<Array<Syntax>>('syntaxes', []);
export const glyphs = lsWritable<Array<GlyphInput>>('glyphs', []);
export const metrics = lsWritable<FontMetrics>('metrics', {
	baseline: 1,
	height: 5
});

export const selectedGlyph = writable('');
export const previewText = writable('Hello World!');
export const syntaxPreviewText = writable('hey');

export const svgArchive = persisted<DirectoryItem>('svgs', defaultDirectoryItem);

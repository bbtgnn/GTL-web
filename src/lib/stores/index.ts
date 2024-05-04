import { persisted } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';
import type { Syntax, GlyphInput } from '$lib/types';
import type { FontMetrics } from '$lib/GTL/createFont';

export const syntaxes = persisted<Array<Syntax>>('syntaxes', []);
export const glyphs = persisted<Array<GlyphInput>>('glyphs', []);

export const defaultMetrics: FontMetrics = {
	baseline: 1,
	height: 5,
	UPM: 5 * 5 * 5 * 2 * 2 * 5
};

export const metrics = persisted<FontMetrics>('metrics', defaultMetrics);

export const selectedGlyph = writable('');
export const previewText = writable('Hello World!');
export const syntaxPreviewText = writable('hey');

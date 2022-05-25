import { writable } from 'svelte-local-storage-store';
import type { Syntax, Glyph } from '$lib/types';
import type { FontMetrics } from '$lib/GTL/createFont';

export const syntaxes = writable<Array<Syntax>>('syntaxes', []);
export const glyphs = writable<Array<Glyph>>('glyphs', []);
export const metrics = writable<FontMetrics>('metrics', {
	baseline: 1,
	height: 5
});

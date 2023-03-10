import { writable as lsWritable } from 'svelte-local-storage-store';
import { writable } from 'svelte/store';
import type { Syntax, GlyphInput } from '$lib/types';
import type { FontMetrics } from '$lib/GTL/createFont';

export const syntaxes = lsWritable<Array<Syntax>>('syntaxes', []);
export const glyphs = lsWritable<Array<GlyphInput>>('glyphs', []);
export const metrics = lsWritable<FontMetrics>('metrics', {
	baseline: 1,
	height: 5,
	UPM: 100 * 5 * 2 * 2 * 2 * 5
});

export const selectedGlyph = writable('');
export const selectedStyle = writable('');

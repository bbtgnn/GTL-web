import { writable } from 'svelte-local-storage-store';
import type { Syntax, Glyph } from '$lib/types';

export const syntaxes = writable<Record<string, Syntax>>('syntaxes', {});
export const glyphs = writable<Array<Glyph>>('glyphs', []);

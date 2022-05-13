import { writable } from 'svelte-local-storage-store';
import type { Syntax } from '$lib/types';

export const syntaxes = writable<Record<string, Syntax>>('syntaxes', {});

import tailwindcss from '@tailwindcss/vite';
import { svelteTesting } from '@testing-library/svelte/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';

//

import { viteStaticCopy } from 'vite-plugin-static-copy';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PYODIDE_EXCLUDE = ['!**/*.{md,html}', '!**/*.d.ts', '!**/*.whl', '!**/node_modules'];

export function viteStaticCopyPyodide(): PluginOption {
	const pyodideDir = dirname(fileURLToPath(import.meta.resolve('pyodide')));
	return viteStaticCopy({
		targets: [
			{
				src: [join(pyodideDir, '*')].concat(PYODIDE_EXCLUDE),
				dest: 'assets'
			}
		]
	});
}

//

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), viteStaticCopyPyodide()],

	optimizeDeps: {
		exclude: ['pyodide']
	},

	test: {
		workspace: [
			{
				extends: './vite.config.ts',
				plugins: [svelteTesting()],

				test: {
					name: 'client',
					environment: 'jsdom',
					clearMocks: true,
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',

				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});

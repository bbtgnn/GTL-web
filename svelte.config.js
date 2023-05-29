import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		preprocess({
			postcss: true
		})
	],

	kit: {
		// /docs because of github pages
		adapter: adapter({
			pages: 'docs'
		}),

		paths: {
			base: dev ? '' : '/GTL-web'
			// assets: dev ? '' : '/GTL-web/docs'
		}
	}
};

export default config;

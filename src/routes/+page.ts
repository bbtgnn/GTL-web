import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
	redirect(303, `${base}/glyphs`);
};

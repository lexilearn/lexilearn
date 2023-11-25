import { fetchAllCollections } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		collections: (await fetchAllCollections()),
	};
};
import { fetchCollection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({params}) => {

	return {
		collection: (await fetchCollection(params.id)),
	};
};
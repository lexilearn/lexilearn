import type { RawCollection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';
import {pb} from "$lib/helpers";

export const load: PageServerLoad = async () => {
	return {
		collections: await pb.collection("collections").getFullList<RawCollection>(),
	};
};
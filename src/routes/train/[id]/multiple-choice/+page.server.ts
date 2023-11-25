import { connectDbAsAdmin } from '$lib/helpers';
import { fetchCollection, type Collection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';
import PocketBase from "pocketbase";

export const load: PageServerLoad = async ({params}) => {
	const pb = await connectDbAsAdmin()

	return {
		collection: (await fetchCollection(pb, params.id)),
	};
};
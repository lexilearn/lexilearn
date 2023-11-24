import { connectDbAsAdmin } from '$lib/helpers';
import type { RawCollection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';
import PocketBase from "pocketbase";

export const load: PageServerLoad = async () => {
	const pb = await connectDbAsAdmin()

	return {
		collections: await pb.collection("collections").getFullList<RawCollection>(),
	};
};
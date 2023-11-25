import { fetchCollection, type Collection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';
import PocketBase from "pocketbase";
import {pb} from "$lib/pocketbase";

export const load: PageServerLoad = async ({params}) => {

	return {
		collection: (await fetchCollection(params.id)),
	};
};
import { connectDbAsAdmin } from '$lib/helpers';
import type { RawCollection } from '$lib/types/Collection';
import type { PageServerLoad } from './$types';
import PocketBase from "pocketbase";

const pb = new PocketBase("https://pocketbase.oskar.global");
await pb.admins.authWithPassword(process.env["PB_USER"], process.env["PB_PASSWORD"]);

export const load: PageServerLoad = async () => {
	const pb = await connectDbAsAdmin()

	return {
		collections: await pb.collection("collections").getFullList<RawCollection>(),
	};
};
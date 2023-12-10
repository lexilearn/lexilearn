import type { RawCollection } from "$lib/types/Collection";
import type { PageServerLoad } from "./$types";
import { pb } from "$lib/helpers";

export const load: PageServerLoad = async (event) => {
    const email = (await event.locals.getSession())?.user?.email;
    if (!email) return { collections: [] };

    const collections = await pb.collection("collections")
        .getFullList<RawCollection>(
            {
                filter: pb.filter("owner.email = {:email} || owner = ''", { email })
            }
        );

    return { collections };
};
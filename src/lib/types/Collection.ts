import type {Card} from "$lib/types/Card";
import {pb} from "$lib/pocketbase";

/**
 * A collection is a group of cards.
 * Use `RawCollection` when getting data from PocketBase and
 * convert it to `Collection` using `intoCollection()`.
 */
export interface Collection {
    card_ids: Card[];
    id: string;
    name: string;
    created: string;
    updated: string;
}

export interface RawCollection {
    expand: {
        card_ids: Card[];
    };
    id: string;
    name: string;
    created: string;
    updated: string;
    card_ids: string[];
}

export function intoCollection(data: RawCollection): Collection {
    return {
        card_ids: data.expand.card_ids,
        id: data.id,
        name: data.name,
        created: data.created,
        updated: data.updated
    }
}

export async function fetchAllCollections(): Promise<Collection[]> {
    const data = await pb.collection("collections").getFullList<RawCollection>({ expand: "card_ids" });
    return data.map(intoCollection);
}

export async function fetchCollection(id: string): Promise<Collection> {
    const data = await pb.collection("collections").getOne<RawCollection>(id, { expand: "card_ids" })
    return intoCollection(data);
}
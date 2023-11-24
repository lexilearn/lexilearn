import type {Card} from "$lib/types/Card";

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
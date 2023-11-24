import type {Card} from "$lib/types/Card";

export interface Collection {
    card_ids: Card[];
    id: string;
    name: string;
    created: string;
    updated: string;
}
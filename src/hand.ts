import { Card } from "./card.ts";

export class Hand {
    cards: [Card?]

    constructor(cards: [Card?]) {
        this.cards = cards;
    }

    toString(): String {
        return this.cards.map(card => card?.toString()).join(", ");
    }
}
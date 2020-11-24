import { Hand, Card } from "../src/cardstock.ts";

var hand = new Hand([]);

for (var i = 0; i < 8; i++) {
    hand.cards.push(new Card(Math.round(Math.random() * 3), Math.round(Math.random() * 12) + 1));
}

console.log(hand.toString());
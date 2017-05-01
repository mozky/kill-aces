import { Deck } from './Deck'

let testDeck = new Deck();

// Tests that the Deck is created and shuffled correctly
console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());
testDeck.shuffle();
console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());

// Sets two different cards to two players
console.log(testDeck.status());
testDeck.draw('Javier', true);
testDeck.draw('Mark', false);
console.log(testDeck.status());

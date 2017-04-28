enum Suit {
  Hearts = 1,
  Diamonds,
  Clubs,
  Spades
}

enum Face {
  Ace = 1,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King
}

class Card {
  readonly _suit: Suit;
  readonly _face: Face;
  private _owner: string;
  constructor(s: Suit, f: Face) {
    this._suit = s;
    this._face = f;
  }
  set owner(newOwner: string) {
    if (typeof this._owner === 'undefined')
      this._owner = newOwner;
    else
      console.error('error: This card already has an owner set')
  }
  get owner(): string {
    if (typeof this._owner === 'undefined')
      return 'Nobody owns this card'
    return this._owner + ' owns this card';
  }
  getValue() {
    return Face[this._face] +  ' of ' + Suit[this._suit];
  }
}

class Deck {
  public _cards: Array<Card> = [];
  constructor() {
    // Iterate enums, generate each Card and add it to the Deck
    for (let s in Suit) {
      if (!Number(s)) {
        for (let f in Face) {
          if (!Number(f)) {
            this._cards.push(new Card((<any>Suit)[s], (<any>Face[f])));
          }
        }
      }
    }
  }

  // Returns global status of the deck
  status() {
    var free: Array<Card> = [];
    var drawn: Array<Card> = [];
    this._cards.map(function(card: Card) {
      if (card.owner != 'Nobody owns this card') {
        drawn.push(card)
      } else {
        free.push(card)
      }
    })
    return 'Drawn: ' + drawn.length + ' Free: ' + free.length;
  }

  // Randomly? Shuffles the deck cards
  shuffle() {
    var currentIndex = this._cards.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this._cards[currentIndex];
      this._cards[currentIndex] = this._cards[randomIndex];
      this._cards[randomIndex] = temporaryValue;
    }
  }

  // Draws one card from top of the deck
  // param: Player who draws the card
  draw(newOwner: string) {
    var card: Card = this._cards[0]
    if (card.owner == 'Nobody owns this card') {
      card.owner = newOwner;
    } else {
      console.error('error: This card already has an owner set')
    }
  }
}

let testCard = new Card(Suit.Spades, Face.Ace);
let testDeck = new Deck();

console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());
testDeck.shuffle();
console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());

console.log(testDeck.status());
testDeck.draw('Javier');
console.log(testDeck.status());

console.log(testCard.owner)
testCard.owner = 'Jown';
console.log(testCard.owner);
testCard.owner = 'Mike';
console.log(testCard.owner);

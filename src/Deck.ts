import { Card } from './Card'
import { Suit, Face } from './Enums'

export class Deck {
  public _cards: Array<Card> = [];
  private _drawn: Array<Card> = [];

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
    return 'Free: ' + this._cards.length + ' Drawn: ' + this._drawn.length;
  }

  // Randonly? Shuffles the deck cards
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

  // Draws one card from the deck
  // @string = Who draws the card
  // @boolean = true if open, false if closed
  draw(newOwner: string, open: boolean) {
    var card: Card = this._cards.pop();
    if (card.draw(newOwner, open)) {
      this._drawn.push(card);
      console.log('Giving ' + (open ? 'open ' : 'closed ') + card.getValue() + ' to ' + newOwner)
    } else {
      console.error('error: Unable to draw card for ' + newOwner)
    }
  }
}

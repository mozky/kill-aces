import { Card } from './Card'
import { CardState } from './Enums'

export class Player {
  readonly _username: string;
  readonly _stack: number;
  private _cards: [Card, Card];

  constructor(u: string) {
    this._username = u;
    this._stack = 5000;
  }

  openCard() {
    for (let c in this._cards) {
      if (this._cards[c].getPosition() == CardState.Open)
        return this._cards[c]
    }
  }
}

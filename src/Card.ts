import { Suit, Face, CardState } from './Enums';

export class Card {
  readonly _suit: Suit;
  readonly _face: Face;
  private _state: CardState;
  private _owner: string;

  constructor(s: Suit, f: Face) {
    this._suit = s;
    this._face = f;
    this._state = CardState.Decked;
  }

  private setOwner(newOwner: string) {
    if (typeof this._owner === 'undefined')
      this._owner = newOwner;
    else
      console.error('error: This card already has an owner set')
  }

  private setState(newState: CardState) {
    if ( newState == CardState.Open && (this._state == CardState.Decked || this._state == CardState.Closed) ) {
      return this._state = newState;
    } else if ( newState == CardState.Closed && this._state == CardState.Decked ) {
      return this._state = newState;
    } else if ( newState == CardState.Dead && this._state != CardState.Dead ) {
      return this._state = newState;
    } else {
      console.error('error: Unknown state change from ' + this._state + ' to ' + newState);
    }
  }

  draw(newOwner: string, open: boolean) {
    try {
      this.setOwner(newOwner);
      open ? this.setState(CardState.Open) : this.setState(CardState.Closed);
    }
    catch(e) {
      console.error('error drawing card', e)
      return false
    }
    return true
  }

  getPosition() {
    return this._state
  }

  getValue() {
    return Face[this._face] +  ' of ' + Suit[this._suit]
  }

  getColor() {
    return Suit[this._suit]
  }

  getFace() {
    return Face[this._face]
  }
}

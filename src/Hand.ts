import { Deck } from './Deck'
import { Card } from './Card'
import { Player } from './Player'

export class Hand {
  readonly _players: Array<Player> = []
  readonly _deck: Deck
  readonly _button: Player
  readonly _starter: Player

  constructor(p: Array<Player>, d: Deck, b: Player) {
    this._players = p
    this._deck = d
    this._button = b
  }

  dealCards() {
    for (let p in this._players) {
      this._deck.draw(this._players[p], true)
      this._deck.draw(this._players[p], false)
    }
  }

  getStarter() {

  }

}

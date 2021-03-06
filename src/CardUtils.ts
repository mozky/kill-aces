import { Card } from './Card'

export function getBestHand(cards: Array<Card>) {
  cards = sortCards(cards)
  const reduced = reduceCards(cards)
  // for(let key in reduced) {
  //   console.log('Key', key, 'Count', reduced[key])
  // }
  return new Promise<String>((resolve, reject) => {
    let bestHand
    switch(Object.keys(reduced).length) {
      case 2:
        // Poker or FullHouse
        for (let hand in reduced) {
          if (reduced[hand] == 4 || reduced[hand] == 1) {
            bestHand = 'Four of a kind'
          } else {
            bestHand = 'Full House'
          }
          break
        }
        break
      case 3:
        // Tercia, Dos pares
        for (let hand in reduced) {
          if (reduced[hand] == 3) {
            bestHand = 'Three of a kind'
          } else if (reduced[hand] == 2) {
            bestHand = 'Two pair'
          } else {
            continue
          }
          break
        }
        break
      case 4:
        // Par
        bestHand = 'Pair'
        break
      default:
      // Puede ser Straight, Flush o HighCard
        if (isFlush(cards)) {
          if(isStraight(cards)) {
            bestHand = 'Straight Flush'
            break
          }
          bestHand = 'Flush'
          break
        } else if (isStraight(cards)) {
          bestHand = 'Straight'
        } else {
          bestHand = 'High Card'
        }
    }

    resolve(bestHand)

  })
}

function sortCards(cards: Array<Card>): Array<Card> {
  return cards.sort(  function compareFace(a: Card, b: Card) {
    if (a._face > b._face) {
      return 1
    }
    if (a._face < b._face ) {
      return -1
    }
    return 0
  })
}

function isFlush(cards: Array<Card>): boolean {
  const color = cards[0].getColor()
  return cards.every(function(c) {
    return c.getColor() === color
  })
}

function isStraight(cards: Array<Card>): boolean {
  var result
  cards.every(function(c, index) {
    if (index > 0) {
      result = ((c._face - 1) == cards[index - 1 ]._face)
    }
    return result
  })
  return result
}

function reduceCards(cards: Array<Card>): Object {
  let counts = {}
  cards.forEach(function(c) {
    counts[c._face] = counts[c._face] ? counts[c._face] + 1 : 1
  })
  return counts
}

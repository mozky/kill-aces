import { Deck } from './Deck'
import { Player } from './Player'
import { Hand } from './Hand'
import { getBestHand } from './CardUtils'

let testDeck = new Deck()
let resultCounts = {}

let promises: Array<Promise<string>> = [];
for (let i = 0; i <= 1000; i++){
  promises[i] = getBestHand([testDeck._cards[0], testDeck._cards[1],testDeck._cards[2], testDeck._cards[3], testDeck._cards[4]])
  testDeck.shuffle()
  promises[i].then((res) => {
    // console.log('Hand ' + [i], res)
    resultCounts[res] = resultCounts[res] ? resultCounts[res] + 1 : 1
    if (i == 1000)
    console.log(resultCounts)
  }).catch((err) => {
    console.log('Catch 1', err)
  })
}

// let p1 = new Player('Javier')
// let p2 = new Player('Mike')
//
// console.log(testDeck.status())
// let testHand = new Hand([p1, p2], testDeck, p1)
// testHand.dealCards()
// console.log(testDeck.status())

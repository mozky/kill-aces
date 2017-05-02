"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Deck_1 = require("./Deck");
var CardUtils_1 = require("./CardUtils");
var testDeck = new Deck_1.Deck();
var resultCounts = {};
var promises = [];
var _loop_1 = function (i) {
    promises[i] = CardUtils_1.getBestHand([testDeck._cards[0], testDeck._cards[1], testDeck._cards[2], testDeck._cards[3], testDeck._cards[4]]);
    testDeck.shuffle();
    promises[i].then(function (res) {
        // console.log('Hand ' + [i], res)
        resultCounts[res] = resultCounts[res] ? resultCounts[res] + 1 : 1;
        if (i == 1000)
            console.log(resultCounts);
    }).catch(function (err) {
        console.log('Catch 1', err);
    });
};
for (var i = 0; i <= 1000; i++) {
    _loop_1(i);
}
// let p1 = new Player('Javier')
// let p2 = new Player('Mike')
//
// console.log(testDeck.status())
// let testHand = new Hand([p1, p2], testDeck, p1)
// testHand.dealCards()
// console.log(testDeck.status())

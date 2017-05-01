"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = require("./Card");
var Enums_1 = require("./Enums");
var Deck = (function () {
    function Deck() {
        this._cards = [];
        this._drawn = [];
        // Iterate enums, generate each Card and add it to the Deck
        for (var s in Enums_1.Suit) {
            if (!Number(s)) {
                for (var f in Enums_1.Face) {
                    if (!Number(f)) {
                        this._cards.push(new Card_1.Card(Enums_1.Suit[s], Enums_1.Face[f]));
                    }
                }
            }
        }
    }
    // Returns global status of the deck
    Deck.prototype.status = function () {
        return 'Free: ' + this._cards.length + ' Drawn: ' + this._drawn.length;
    };
    // Randonly? Shuffles the deck cards
    Deck.prototype.shuffle = function () {
        var currentIndex = this._cards.length, temporaryValue, randomIndex;
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
    };
    // Draws one card from the deck
    // @string = Who draws the card
    // @boolean = true if open, false if closed
    Deck.prototype.draw = function (newOwner, open) {
        var card = this._cards.pop();
        if (card.draw(newOwner, open)) {
            this._drawn.push(card);
            console.log('Giving ' + (open ? 'open ' : 'closed ') + card.getValue() + ' to ' + newOwner);
        }
        else {
            console.error('error: Unable to draw card for ' + newOwner);
        }
    };
    return Deck;
}());
exports.Deck = Deck;

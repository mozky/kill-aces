"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CardState;
(function (CardState) {
    CardState[CardState["Decked"] = 0] = "Decked";
    CardState[CardState["Open"] = 1] = "Open";
    CardState[CardState["Closed"] = 2] = "Closed";
    CardState[CardState["Dead"] = 3] = "Dead";
})(CardState = exports.CardState || (exports.CardState = {}));
var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 1] = "Hearts";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Clubs"] = 3] = "Clubs";
    Suit[Suit["Spades"] = 4] = "Spades";
})(Suit = exports.Suit || (exports.Suit = {}));
var Face;
(function (Face) {
    Face[Face["Ace"] = 1] = "Ace";
    Face[Face["Two"] = 2] = "Two";
    Face[Face["Three"] = 3] = "Three";
    Face[Face["Four"] = 4] = "Four";
    Face[Face["Five"] = 5] = "Five";
    Face[Face["Six"] = 6] = "Six";
    Face[Face["Seven"] = 7] = "Seven";
    Face[Face["Eight"] = 8] = "Eight";
    Face[Face["Nine"] = 9] = "Nine";
    Face[Face["Ten"] = 10] = "Ten";
    Face[Face["Jack"] = 11] = "Jack";
    Face[Face["Queen"] = 12] = "Queen";
    Face[Face["King"] = 13] = "King";
})(Face = exports.Face || (exports.Face = {}));

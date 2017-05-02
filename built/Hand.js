"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Hand = (function () {
    function Hand(p, d, b) {
        this._players = [];
        this._players = p;
        this._deck = d;
        this._button = b;
    }
    Hand.prototype.dealCards = function () {
        for (var p in this._players) {
            this._deck.draw(this._players[p], true);
            this._deck.draw(this._players[p], false);
        }
    };
    Hand.prototype.getStarter = function () {
    };
    return Hand;
}());
exports.Hand = Hand;

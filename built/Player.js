"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = require("./Enums");
var Player = (function () {
    function Player(u) {
        this._username = u;
        this._stack = 5000;
    }
    Player.prototype.openCard = function () {
        for (var c in this._cards) {
            if (this._cards[c].getPosition() == Enums_1.CardState.Open)
                return this._cards[c];
        }
    };
    return Player;
}());
exports.Player = Player;

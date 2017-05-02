"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = require("./Enums");
var Card = (function () {
    function Card(s, f) {
        this._suit = s;
        this._face = f;
        this._state = Enums_1.CardState.Decked;
    }
    Card.prototype.setOwner = function (newOwner) {
        if (typeof this._owner === 'undefined')
            this._owner = newOwner;
        else
            console.error('error: This card already has an owner set');
    };
    Card.prototype.setState = function (newState) {
        if (newState == Enums_1.CardState.Open && (this._state == Enums_1.CardState.Decked || this._state == Enums_1.CardState.Closed)) {
            return this._state = newState;
        }
        else if (newState == Enums_1.CardState.Closed && this._state == Enums_1.CardState.Decked) {
            return this._state = newState;
        }
        else if (newState == Enums_1.CardState.Dead && this._state != Enums_1.CardState.Dead) {
            return this._state = newState;
        }
        else {
            console.error('error: Unknown state change from ' + this._state + ' to ' + newState);
        }
    };
    Card.prototype.draw = function (newOwner, open) {
        try {
            this.setOwner(newOwner);
            open ? this.setState(Enums_1.CardState.Open) : this.setState(Enums_1.CardState.Closed);
        }
        catch (e) {
            console.error('error drawing card', e);
            return false;
        }
        return true;
    };
    Card.prototype.getPosition = function () {
        return this._state;
    };
    Card.prototype.getValue = function () {
        return Enums_1.Face[this._face] + ' of ' + Enums_1.Suit[this._suit];
    };
    Card.prototype.getColor = function () {
        return Enums_1.Suit[this._suit];
    };
    Card.prototype.getFace = function () {
        return Enums_1.Face[this._face];
    };
    return Card;
}());
exports.Card = Card;

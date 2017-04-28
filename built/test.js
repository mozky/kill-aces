var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 1] = "Hearts";
    Suit[Suit["Diamonds"] = 2] = "Diamonds";
    Suit[Suit["Clubs"] = 3] = "Clubs";
    Suit[Suit["Spades"] = 4] = "Spades";
})(Suit || (Suit = {}));
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
})(Face || (Face = {}));
var Card = (function () {
    function Card(s, f) {
        this._suit = s;
        this._face = f;
    }
    Object.defineProperty(Card.prototype, "owner", {
        get: function () {
            if (typeof this._owner === 'undefined')
                return 'Nobody owns this card';
            return this._owner + ' owns this card';
        },
        set: function (newOwner) {
            if (typeof this._owner === 'undefined')
                this._owner = newOwner;
            else
                console.error('error: This card already has an owner set');
        },
        enumerable: true,
        configurable: true
    });
    Card.prototype.getValue = function () {
        return Face[this._face] + ' of ' + Suit[this._suit];
    };
    return Card;
}());
var Deck = (function () {
    function Deck() {
        this._cards = [];
        // Iterate enums, generate each Card and add it to the Deck
        for (var s in Suit) {
            if (!Number(s)) {
                for (var f in Face) {
                    if (!Number(f)) {
                        this._cards.push(new Card(Suit[s], Face[f]));
                    }
                }
            }
        }
    }
    // Returns global status of the deck
    Deck.prototype.status = function () {
        var free = [];
        var drawn = [];
        this._cards.map(function (card) {
            if (card.owner != 'Nobody owns this card') {
                drawn.push(card);
            }
            else {
                free.push(card);
            }
        });
        return 'Drawn: ' + drawn.length + ' Free: ' + free.length;
    };
    // Randomly? Shuffles the deck cards
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
    // Draws one card from top of the deck
    // param: Player who draws the card
    Deck.prototype.draw = function (newOwner) {
        var card = this._cards[0];
        if (card.owner == 'Nobody owns this card') {
            card.owner = newOwner;
        }
        else {
            console.error('error: This card already has an owner set');
        }
    };
    return Deck;
}());
var testCard = new Card(Suit.Spades, Face.Ace);
var testDeck = new Deck();
console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());
testDeck.shuffle();
console.log(testDeck._cards[0].getValue(), testDeck._cards[1].getValue());
console.log(testDeck.status());
testDeck.draw('Javier');
console.log(testDeck.status());
console.log(testCard.owner);
testCard.owner = 'Jown';
console.log(testCard.owner);
testCard.owner = 'Mike';
console.log(testCard.owner);

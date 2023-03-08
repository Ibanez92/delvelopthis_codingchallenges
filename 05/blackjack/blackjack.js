const doIHit = (card_1, card_2) => {
    // hit anytime the card total is 14 or less
    let cards = {"2":2, "3":3, "4": 4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "J":10, "Q":10, "K":10, "A":11}
    return cards[card_1] + cards[card_2] > 14 ? 0 : 1
}

module.exports = doIHit;
const doIHit = (card_1, card_2) => {
    // hit anytime the card total is 14 or less
    cardTotal = Number(card_1) + Number(card_2)
    if (cardTotal <= 14) {
        return console.log(1);
    } else {
        return console.log(0);
    }
}

module.exports = doIHit;
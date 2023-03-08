const coinConverter = (coins) => { 
    // takes in a number of coins and returns an object with both the converted number of lives and the remaining of coins
    return {
        lives: Math.floor(coins/100),
        coinsRemaining: coins % 100
    }
}
module.exports = coinConverter;

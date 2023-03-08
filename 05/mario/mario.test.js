const coinConverter = require("./mario")

test("150 Coins", () => {
    expect(coinConverter(150)).toStrictEqual({"coinsRemaining": 50, "lives": 1})
})
test("99 Coins", () => {
    expect(coinConverter(99)).toStrictEqual({"coinsRemaining": 99, "lives": 0})
})
test("211065732 Coins", () => {
    expect(coinConverter(211065732)).toStrictEqual({"coinsRemaining": 32, "lives": 2110657})
})
test("100 Coins", () => {
    expect(coinConverter(100)).toStrictEqual({"coinsRemaining": 0, "lives": 1})
})
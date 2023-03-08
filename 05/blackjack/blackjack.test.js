const doIHit = require("./blackjack");

test("Ace + Jack", () => {
    expect(doIHit("A", "J")).toBe(0)
});
test("Two + Two", () => {
    expect(doIHit("2", "2")).toBe(1)
});
test("Ace + Three", () => {
    expect(doIHit("A", "3")).toBe(1)
});
test("King + Four", () => {
    expect(doIHit("K", "4")).toBe(1)
});
test("Eight + Seven", () => {
    expect(doIHit("8", "7")).toBe(0)
});
test("Queen + Seven", () => {
    expect(doIHit("Q", "7")).toBe(0)
});
test("Seven + Seven", () => {
    expect(doIHit("7", "7")).toBe(1)
});
test("King + Jack", () => {
    expect(doIHit("K", "J")).toBe(0)
});
test("Queen + Two", () => {
    expect(doIHit("Q", "2")).toBe(1)
});


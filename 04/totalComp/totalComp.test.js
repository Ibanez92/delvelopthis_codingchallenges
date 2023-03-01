const totalComp = require("./totalComp");

test("Salary $60,000 | Bonus 10% | Stock -", () => {
    expect(totalComp(60000,.1,0)).toStrictEqual([66000, 67980, 70020]);
});

test("Salary $100,000 | Bonus 6% | Stock $5000", () => {
    expect(totalComp(100000,.06,5000)).toStrictEqual([111000, 109180, 112456]);
});

test("Salary $45,200 | Bonus 3% | Stock $1,234", () => {
    expect(totalComp(45200, .03, 1234)).toStrictEqual([47790, 47953, 49392]);
});

test("Salary $1 | Bonus 99% | Stock $100,000", () => {
    expect(totalComp(1, .99, 100000)).toStrictEqual([100002, 3, 3]);
});
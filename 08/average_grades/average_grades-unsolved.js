function averageGrades(grades) { 
    const scoreMap = {};

    for (let i = 0; i < grades.length; i++) {
        const thisGrade = grades[i]
        if (scoreMap[thisGrade.name]) {
            scoreMap[thisGrade.name].push(thisGrade.grade)
        } else {
            scoreMap[thisGrade.name] = [thisGrade.grade]
        }
    }
    for (const name in scoreMap) {
        const grades = scoreMap[name];
        const average = grades.reduce((a, b) => a + b) / grades.length;
        scoreMap[name] = average;
    }
    console.log(scoreMap);
}

const grades = [
    {
        name: "Alice",
        grade: 75
    },
    {
        name: "Bob",
        grade: 80
    },
    {
        name: "Alice",
        grade: 85
    },
    {
        name: "Bob",
        grade: 90
    }, {
        name: "Charlie",
        grade: 70
    }, {
        name: "Alice",
        grade: 90
    }, {
        name: "Charlie",
        grade: 80
    },
];


console.log(averageGrades(grades));

module.exports = averageGrades;

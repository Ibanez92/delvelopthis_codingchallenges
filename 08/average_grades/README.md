# Average grades

You have been given an array of objects that contain student names and their corresponding test scores, and your task is to write a JavaScript function that calculates the average score for each student and returns an object that maps each student name to their average score.

Write a JavaScript function averageScores(scores) that takes an array of objects scores as an argument and returns an object that maps each student name to their average score.

## Instructions

1. Initialize an empty Map variable or an empty object called scoreMap that will store the scores for each student.

2. Use a loop to iterate over the input array scores.

3. On each iteration of the loop, add the test score to the scoreMap for the corresponding student.

4. After iterating through all objects, initialize an empty object variable called averages that will store the average scores for each student.

5. Use a loop again to iterate over the entries in the scoreMap.

6. On each iteration of the loop, calculate the average score for the current student by dividing the total score by the number of tests taken, and add it to the averages object with the student name as the key.

7. After iterating through all entries in the scoreMap, return the averages object.

## Examples
```
averageGrades([
  { name: 'Alice', score: 75 },
  { name: 'Bob', score: 80 },
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 90 },
  { name: 'Charlie', score: 70 },
  { name: 'Alice', score: 90 },
  { name: 'Charlie', score: 80 }
]) -> { Alice: 83.33333333333333, Bob: 85, Charlie: 75 }

averageGrades([
  { name: 'John', score: 85 },
  { name: 'Marie', score: 70 },
  { name: 'Jane', score: 90 },
  { name: 'John', score: 75 },
  { name: 'Marie', score: 80 },
  { name: 'Jane', score: 95 },
  { name: 'John', score: 80 }
]) -> { John: 80, Marie: 75, Jane: 93.33333333333333 }

averageGrades([
  { name: 'David', score: 85 },
  { name: 'Emily', score: 75 },
  { name: 'Henry', score: 90 },
  { name: 'Sarah', score: 80 },
  { name: 'David', score: 90 },
  { name: 'Emily', score: 80 },
  { name: 'Henry', score: 95 },
  { name: 'Sarah', score: 85 },
  { name: 'David', score: 80 },
  { name: 'Emily', score: 85 }
])-> { David: 85, Emily: 80, Henry: 93.33333333333333, Sarah: 82.5 }
```

## Testing
Open your terminal and use the command `npm test -- average_grades.test.js` to run the necessary tests.
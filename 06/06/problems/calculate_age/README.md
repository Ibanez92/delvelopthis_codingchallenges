# Calculate age using the Date object

In this exercise, you'll write a JavaScript program that takes a person's date of birth as a command-line argument and calculates their age using the Date object.

1. Use the Date object to create a new date object for the person's `birthDate`.
2. If `birthDate` is not a number, that means the user did not put in a correctly formatted date string. Throw a new Error with the text "Invalid date string".
3. Create a new Date object for today's date.
4. Subtract the birthDate from today
5. The result is in milliseconds; use arithmetic to get age in years.
6. Display a message in the console that says "You are `age` years old.", where `age` is the person's age in years rounded down to the nearest whole number.
7. Return `age`.

## Examples
(Assuming today's date is March 1, 2023)
```
node age.js "1990-03-01" -> "You are 33 years old."

node age.js "2001-08-15" -> "You are 21 years old."

node age.js "1977-12-05-202" -> "Invalid date string"
```

## Testing
Open your terminal and use the command `npm test -- calculate_age.test.js` to run the necessary tests.
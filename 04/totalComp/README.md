# Total Compensation

Everyone should know that salary is only a part of your total compensation. Companies offer additional compensation in things like bonuses and one time stock grants. 

Create a function named `totalComp` that accepts three required arguments: 

1. salary
2. bonus percentage
3. stock grant

The output of the function should return what your first year total compensation will be (stock grant included) and what the next two years will be assuming a 3 percent merit increase each year. All values should be rounded up to the nearest integer digit.

## Restrictions

1. Salary should be an integer greater than 0.
2. Bonus should be a float in the interval [0,1]
3. Stock grant should be an integer value greater than 0

## Examples

```python
totalComp(60000, .1, 0)
#  --> 66000, 67980, 70020

totalComp(100000, .6, 5000)
#  --> 111000, 109180, 112456
```

## Testing

When you feel you are ready to test, open your terminal and run 

### Python

```bash
python3 totalComp.test.py 
```

### JavaScript
```bash
npm test -- totalComp.test.js
```
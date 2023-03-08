# Mario

In Super Mario Brothers it is your job to rescue Princess Peach from the evil Bowser. You are given 3 lives to start, but each time you collect 100 coins you get an extra life. 

Create a function called `coinConverter` that takes in a number of coins and returns an object with both the converted number of lives and the remaining of coins. 

## Restrictions

1. The input number of coins will be a positive integer.
2. The output number of coins should be in the interval [0, 100).

## Examples

```python
# ------------ Example 1 ------------ #
coins = 150
coinConverter(coins)
# --> {"lives": 1, "coinsRemaining": 50}

# ------------ Example 2 ------------ #
coins = 99
coinConverter(coins)
# --> {"lives": 0, "coinsRemaining": 99}

```

## Testing

When you feel you are ready to test, open your terminal and run 

### Python

```bash
pytest 
```

### JavaScript
```bash
npm test -- mario.test.js
```

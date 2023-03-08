# Blackjack

In the game of Blackjack, a player is dealt two initial cards and can then draw cards (or hit) as many times as they want. The goal of the game is to get closer to 21 than the dealer.

While there are various strategies for when to hit or not, for this exercise we will assume we want to hit anytime the card total is 14 or less. 

Create a function called `doIHit` which takes two cards as input, and returns a 1 if you should hit and a 0 otherwise. 

## Restrictions

1. The two card inputs will be in the set `{2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A}` where the number cards retain their value, the face cards are all 10, and Aces are 11. 

## Example

```python

card_1 = "A"
card_2 = "J"

doIHit(card_1, card_2)
# --> 0

card_1 = "2"
card_2 = "2"

doIHit(card_1, card_2)
# --> 1

```

## Testing

When you feel you are ready to test, open your terminal and run 

### Python

```bash
pytest 
```

### JavaScript
```bash
npm test -- blackjack.test.js
```

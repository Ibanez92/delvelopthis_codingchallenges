import pytest
from mario import coinConverter

@pytest.mark.parametrize(
    "coins,expected", [
        (150, {"coinsRemaining": 50, "lives": 1}),
        (99, {"coinsRemaining": 99, "lives": 0}),
        (211065732, {"coinsRemaining": 32, "lives": 2110657}),
        (100, {"coinsRemaining": 0, "lives": 1}),
    ]
)
def test_coinConverter(coins, expected):
    out = coinConverter(coins)
    assert out['coinsRemaining'] == expected['coinsRemaining']
    assert out['lives'] == expected['lives']

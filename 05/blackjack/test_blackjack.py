import pytest
from blackjack import doIHit

@pytest.mark.parametrize(
    "a,b,expected", [
        ("A", "J", 0),
        ("2", "2", 1),
        ("A", "3", 1),
        ("K", "4", 1),
        ("8", "7", 0),
        ("Q", "7", 0),
        ("7", "7", 1),
        ("K", "J", 0),
        ("Q", "2", 1),
    ]
)
def test_blackjack(a, b, expected):
    assert doIHit(a, b) == expected

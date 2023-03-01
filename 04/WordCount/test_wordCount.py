from wordCount import wordCount
import pytest


@pytest.mark.parametrize(
    "s,expected", [
        ("I do not like green eggs and ham. I do not like them Sam-I-Am.", 10),
        ("The quick brown fox jumped over the lazy dog.", 8),
        ("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 63)
    ]
)
def test_wordCount(s,expected):
    assert wordCount(s) == expected
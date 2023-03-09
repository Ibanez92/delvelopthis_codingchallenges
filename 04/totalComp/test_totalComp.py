from totalComp import totalComp
import pytest

@pytest.mark.parametrize(
    "salary,bonus,stock,expected",
    [
        (60000, .1, 0, (66000, 67980, 70020)),
        (100000, .06, 5000, (111000, 109180, 112456)),
        (45200, .03, 1234, (47790, 47953, 49392)),
        (1, .99, 100000, (100002, 3, 3))
    ]
)
def test_totalComp(salary, bonus, stock, expected):
    assert totalComp(salary, bonus, stock) == expected

# Word Count

Suppose you are an editor of a magazine, but instead of counting the total number of words in an article, you want to count the number of unique words that appear in a some text. 

In this exercise, create a function called `unique_words` which accepts a string and returns the number of unqiue words in the text. 

## Restrictions

1. The input string will not be empty.

## Examples

```python

s = "I do not like green eggs and ham. I do not like them Sam-I-Am."

unique_words(s)
# --> 10

s = "The quick brown fox jumped over the lazy dog."

unique_words(s)
# --> 8

```

## Testing

When you feel you are ready to test, open your terminal and run 

### Python

```bash
pytest 
```

### JavaScript
```bash
npm test -- wordCount.test.js
```
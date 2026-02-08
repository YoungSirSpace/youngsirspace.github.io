# Article 3 - Some of My Codes for Testing

*27 December, 2025*

Below are my codes.

```python
class Polynomial:
    def __init__(self, copy):
        copy = list(copy)
        while len(copy) > 1 and copy[-1] == 0:
            copy.pop()
        self.copy = copy

    def __repr__(self):
        return "Polynomial({})".format(repr(self.copy))

    def __str__(self):
        terms = []
        for power, coef in enumerate(self.copy):
            if power == 0:
                terms.append(f"{coef}")
            else:
                terms.append(f"{coef}*x^{power}")
        return " + ".join(terms)

    def __add__(self, other):
        if not isinstance(other, Polynomial):
            return NotImplemented
        max_len = max(len(self.copy), len(other.copy))
        new_copy = []
        for i in range(max_len):
            c1 = self.copy[i] if i < len(self.copy) else 0
            c2 = other.copy[i] if i < len(other.copy) else 0
            new_copy.append(c1 + c2)
        return Polynomial(new_copy)

    def __mul__(self, other):
        if not isinstance(other, Polynomial):
            return NotImplemented
        new_len = len(self.copy) + len(other.copy) - 1
        new_copy = [0] * new_len
        for i, c1 in enumerate(self.copy):
            for j, c2 in enumerate(other.copy):
                new_copy[i + j] += c1 * c2
        return Polynomial(new_copy)

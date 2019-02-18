class Something:
    def __init__(self):
        self.lines = [1, 2, 3, 4, 5]

    def __iter__(self):
        return iter(self.lines)

    def __next__(self):
        for i in self.lines:
            yield i


obj = Something()
for i in obj:
    print(i)
for i in obj.lines:
    print(i)
print(obj)

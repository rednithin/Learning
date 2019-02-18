def recurse(num):
    if num != 0:
        print(num)
        yield from recurse(num - 1)


for i in recurse(5):
    pass

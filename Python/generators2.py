def foo():
    yield 1
    yield 2


def bar():
    yield from foo()
    yield 3
    yield 4


for i in bar():
    print(i)

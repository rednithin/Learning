
def memoize(fn):
    d = {}

    def caching(*args):
        if args not in d:
            d[args] = fn(*args)
        return d[args]

    return caching


# @memoize
def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    return fibonacci(num-1) + fibonacci(num-2)


print(fibonacci(4))
print(fibonacci(35))

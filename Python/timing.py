def timeit(fn):
    is_evaluating = False

    def timing(*args):
        nonlocal is_evaluating
        if is_evaluating:
            return fn(*args)
        else:
            from time import time
            start = time() * 1000
            is_evaluating = True
            val = fn(*args)
            end = time() * 1000
            is_evaluating = False
            print(f"Time Taken: {(end-start) * 1000} ms")
            return val
    return timing


def memoize(fn):
    d = {}

    def caching(*args):
        if args not in d:
            d[args] = fn(*args)
        return d[args]

    return caching


@timeit
@memoize
def fibonacci(num):
    if num == 0:
        return 0
    elif num == 1:
        return 1
    return fibonacci(num-1) + fibonacci(num-2)


print(fibonacci(4))
print(fibonacci(35))

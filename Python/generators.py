def gen_numbers():
    print("Created")
    yield


instance = gen_numbers()

while True:
    try:
        next(instance)
    except StopIteration:
        break

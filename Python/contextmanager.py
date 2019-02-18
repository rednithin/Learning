class ContextManager:
    def __init__(self):
        self.__f = {'a': 1, 'b': 1}

    def __enter__(self):
        print("Enter")
        return self.__f

    def __exit__(self, *args, **kwargs):
        print("Exit")
        pass


with ContextManager() as f:
    print(f)

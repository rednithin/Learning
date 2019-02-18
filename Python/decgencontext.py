import os


class ContextManager:
    def __init__(self, gen):
        self.__gen = gen

    def __call__(self, *args, **kwargs):
        self.__gen = self.__gen(*args, **kwargs)
        return self

    def __enter__(self, *args, **kwargs):
        return next(self.__gen)

    def __exit__(self, *args, **kwargs):
        next(self.__gen, None)


FILE_NAME = 'test.data'
FILE_PATH = os.path.join(os.path.dirname(__file__), FILE_NAME)


@ContextManager
def do_read_file(filename):
    f = open(filename, 'r')
    yield f
    f.close()


with do_read_file(FILE_PATH) as f:
    print(f.read())

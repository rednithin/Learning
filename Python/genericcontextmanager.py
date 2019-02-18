import os


class ContextManager:
    def __init__(self, gen):
        self.__gen = gen

    def __enter__(self, *args, **kwargs):
        return next(self.__gen)

    def __exit__(self, *args, **kwargs):
        next(self.__gen, None)


FILE_NAME = 'textfile.txt'
FILE_PATH = os.path.join(os.path.dirname(__file__), FILE_NAME)


def do_read_file(filename):
    f = open(filename, 'r')
    yield f
    f.close()


gen = do_read_file(FILE_PATH)
with ContextManager(gen) as f:
    print(f.read())

FILENAME = "textfile.txt"

with open(FILENAME, "w") as f:
    for i in range(10):
        f.write("Hahahah\n")


with open(FILENAME) as f:
    print(f)
    print(f.readlines())

with open("vocabulary.txt", "r") as f:
    for line in f:
        exam = input(line.strip().split()[0])
        if exam == line.strip().split()[1]:
            print("맞았습니다!")
        elif exam != line.strip().split()[1]:
            print("아쉽습니다. 정답은 {}입니다.".format(line.strip().split()[1]))
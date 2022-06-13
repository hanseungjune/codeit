with open("chicken.txt", "r", encoding="UTF-8") as f:
    for line in f:
        print(line.strip())         # strip() 은 /n과 같은 한줄 띄어쓰기나 공백을 지우는 역할을 함
        
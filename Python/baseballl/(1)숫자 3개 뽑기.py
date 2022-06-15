# from random import randint
#
#
# def generate_numbers():
#     numbers = []
#
#     # 코드를 작성하세요.
#     i = 0
#     while i < 3:
#         numbers.append(randint(0, 9))
#         i += 1
#
#     print("0과 9 사이의 서로 다른 숫자 3개를 랜덤한 순서로 뽑았습니다.\n")
#     return numbers
#
#
# print(generate_numbers())

from random import randint


def generate_numbers():
    numbers = []

    while len(numbers) < 3:
        num = randint(0, 9)
        if num not in numbers:
            numbers.append(num)

    print("0과 9 사이의 서로 다른 숫자 3개를 랜덤한 순서로 뽑았습니다.\n")
    return numbers
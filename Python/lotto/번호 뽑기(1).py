from random import randint


def generate_numbers(n):
    # 코드를 작성하세요.
    numbers = []
    while len(numbers) < n:
        num = randint(1, 45)
        if num not in numbers:
            numbers.append(num)
    return numbers


print(generate_numbers(6))
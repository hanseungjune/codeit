from random import randint


def generate_numbers(n):
    # 지난 과제의 코드를 붙여 넣으세요.
    numbers = []
    while len(numbers) < n:
        new_number = randint(1, 45)
        if new_number not in numbers:
            numbers.append(new_number)

    return numbers


print(generate_numbers(6))


def draw_winning_numbers(n):
    # 코드를 작성하세요.
    winning_numbers = generate_numbers(7)
    return sorted(winning_numbers[:6]) + winning_numbers[6:]


print(draw_winning_numbers(7))
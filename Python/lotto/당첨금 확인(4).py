def count_matching_numbers(numbers, winning_numbers):
    # 지난 과제의 코드를 붙여 넣으세요.
    # 코드를 작성하세요.
    count = 0
    for number_1 in numbers:
        for number_2 in winning_numbers:
            if number_1 == number_2:
                count += 1
    return count

def check(numbers, winning_numbers):
    # 코드를 작성하세요.
    if(count_matching_numbers(numbers, winning_numbers)==6 and winning_numbers[6] not in numbers[0:]):
        return 1000000000
    elif(count_matching_numbers(numbers, winning_numbers)==6 and winning_numbers[6] in numbers[0:]):
        return 50000000
    elif(count_matching_numbers(numbers, winning_numbers)==5):
        return 1000000
    elif(count_matching_numbers(numbers, winning_numbers)==4):
        return 50000
    elif(count_matching_numbers(numbers, winning_numbers)==3):
        return 5000
    else:
        return "꽝입니다"
# 테스트
print(check([2, 4, 11, 14, 25, 40], [4, 12, 14, 28, 40, 41, 6]))
print(check([2, 4, 11, 14, 25, 40], [2, 4, 10, 11, 14, 40, 25]))
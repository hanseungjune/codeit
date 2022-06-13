def count_matching_numbers(list_1, list_2):
    # 코드를 작성하세요.
    count = 0
    for number_1 in list_1:
        for number_2 in list_2:
            if number_1 == number_2:
                count += 1
    return count

# 테스트
print(count_matching_numbers([2, 7, 11, 14, 25, 40], [2, 11, 13, 14, 30, 35]))
print(count_matching_numbers([2, 7, 11, 14, 25, 40], [14]))
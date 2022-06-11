# 리스트 (LIST)
numbers = [2,3,5,6,11,23]
names = ["윤수","혜린","태호","영훈"]

# 인덱싱 (indexing)
num_1 = numbers[1]
num_3 = numbers[3]
print(num_1 + num_3)    # 9

print(numbers[-1])      # 23
print(numbers[-2])      # 11

# 리스트 슬라이싱(list slicing)
print(numbers[0:4])     # [2, 3, 5, 6]
print(numbers[2:])      # [5, 6, 11, 23]
print(numbers[:3])      # [2, 3, 5]

new_list = numbers[:3]  # [2, 3, 5]
print(new_list[2])      # 5

# 배열 요소 바꾸기
numbers[0] = 7
print(numbers)          # [7, 3, 5, 6, 11, 23]
numbers[0] += numbers[1]
print(numbers)          # [10, 3, 5, 6, 11, 23]

numbers = []

# append 는 무조건 배열의 오른쪽에 붙임 (JS push())
numbers.append(5)
numbers.append(8)
print(numbers)          # [5, 8]
print(len(numbers))     # 2

numbers = [2, 3, 5, 7, 11, 13, 17, 19]
del numbers[3]
print(numbers)          # [2, 3, 5, 11, 13, 17, 19]

# insert(index, element)
numbers = [2, 3, 5, 7, 11, 13, 17, 19]
numbers.insert(4, 37)
print(numbers)          # [2, 3, 5, 7, 37, 11, 13, 17, 19]

numbers = [19, 13, 2, 5, 3, 11,7, 17]

# sorted()는 기존의 numbers를 건드리는 함수가 아니다, 정렬된 새로운 리스트를 리턴

new_list = sorted(numbers)
print(new_list)             # [2, 3, 5, 7, 11, 13, 17, 19]

new_list2 = sorted(numbers, reverse=True)
print(new_list2)            # [19, 17, 13, 11, 7, 5, 3, 2]

print(numbers)              # [19, 13, 2, 5, 3, 11, 7, 17] → 그대로 나옴

# sort()는 기존의 numbers를 건드려서 정렬시키는 것, 아무것도 리턴하지 않음(출력 시에만 볼 수 있음)
numbers.sort()
print(numbers)              # [2, 3, 5, 7, 11, 13, 17, 19]

numbers.sort(reverse=True)
print(numbers)              # [19, 17, 13, 11, 7, 5, 3, 2]

# 리스트에서 값의 존재 확인하기
# value가 some_list의 요소인지 확인
def in_list(some_list, value):
    i = 0
    while i < len(some_list):
        # some_list에서 value를 찾으면 True를 리턴
        if some_list[i] == value:
            return True
        i = i + 1

    # 만약 some_list에서 value를 발견하지 못했으면 False를 리턴
    return False

# 테스트
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
print(in_list(primes, 7))              # True
print(in_list(primes, 12))             # False

# 테스트 2 ( 위의 공식이 필요가 없음 )
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
print(7 in primes)          # True
print(12 in primes)         # False

# 테스트 2 ( 위의 공식이 필요가 없음 )
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23]
print(7 not in primes)              # False
print(12 not in primes)             # True

# 리스트 안의 리스트 (Nested List)

# 세 번의 시험을 보는 수업
grades = [[62, 75, 77], [78, 81, 86], [85, 91, 89]]

# 첫 번째 학생의 성적
print(grades[0])            # [62, 75, 77]

# 세 번째 학생의 성적
print(grades[2])            # [85, 91, 89]

# 첫 번째 학생의 첫 번째 시험 성적
print(grades[0][0])         # 62

# 세 번째 학생의 두 번째 시험 성적
print(grades[2][1])         # 91

# 첫 번째 시험의 평균
print((grades[0][0] + grades[1][0] + grades[2][0]) / 3)         # 75.0

# sort 메소드
numbers = [5, 3, 7, 1]
numbers.sort()
print(numbers)          # [1, 3, 5, 7]

# reverse 메소드
numbers = [5, 3, 7, 1]
numbers.reverse()
print(numbers)          #[1, 7, 3, 5]

# index 메소드
members = ["영훈", "윤수", "태호", "혜린"]
print(members.index("윤수"))      # 1
print(members.index("태호"))      # 2

# remove 메소드
fruits = ["딸기", "당근", "파인애플", "수박", "참외", "메론"]
fruits.remove("파인애플")
print(fruits)           #['딸기', '당근', '수박', '참외', '메론']
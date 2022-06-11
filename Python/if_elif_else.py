temperature = 16
if temperature <= 10:
    print("자켓을 입니다.")
else:
    print("자켓을 입지않는다")

score = 65

if score > 90:
    print('A')
elif score > 80:
    print('B')
elif score > 70:
    print('C')
elif score > 60:
    print('D')
else:
    print('F')


def print_grade(midterm_score, final_score):
    total = midterm_score + final_score
    # 코드를 쓰세요.
    if total > 90:
        print('A')
    elif total > 80:
        print('B')
    elif total > 70:
        print('C')
    elif total > 60:
        print('D')
    else:
        print('F')


# 테스트
print_grade(40, 45)
print_grade(20, 35)
print_grade(30, 32)
print_grade(50, 45)

i = 1

while i < 101 :
    print(i)
    i += 1

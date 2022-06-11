def get_square(x):
    return x * x

y = get_square(3) + get_square(4)
print(y)


def hello():
    print("Hello!")
    print("Welcome to Codeit!")


print("함수 호출 전")
hello()
print("함수 호출 후")


# 함수 호출 전
# Hello!
# Welcome to Codeit!
# 함수 호출 후

def square(x):
    return x * x


print("함수 호출 전")
print(square(3) * square(4))
print("함수 호출 후")

# 함수 호출 전
# 144
# 함수 호출 후

def square(x):
    print("함수 시작")
    return x * x
    print("함수 끝")  # 데드 코드


print(square(3))
print("Hello World!")

# 함수 시작
# 9
# Hello World!

# return의 역할
# 함수를 중지시킴
# 값을 돌려줌

def print_square(x):
    print(x * x)

def get_square(x):
    return x * x

print(print_square(3))  # 9, None(리턴값이 없기 때문에)
print(get_square(3))  # 9




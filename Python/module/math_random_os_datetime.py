# standard library (표준 라이브러리)
import math, random, os

print(math.log10(100))
print(math.cos(0))
print(math.pi)

print(random.random())

print(os.getlogin())            # 어떤 계정으로 로그인 되어있는지
print(os.getcwd())              # 현재 폴더의 위치는 어디인지

# randint(a, b)를 하면, a ≤ N ≤ b를 만족하는 어떤 랜덤한 정수 N을 리턴하는 것이죠.
print(random.randint(1, 20))
print(random.randint(1, 20))
print(random.randint(1, 20))
print(random.randint(1, 20))
print(random.randint(1, 20))

# uniform(a, b)를 하면, a ≤ N ≤ b를 만족하는 어떤 랜덤한 소수 N을 리턴하는 것이죠.
print(random.uniform(0, 1))
print(random.uniform(0, 1))
print(random.uniform(0, 1))
print(random.uniform(0, 1))
print(random.uniform(0, 1))

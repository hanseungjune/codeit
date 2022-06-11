# 오늘은 2019년 10월 29일 입니다.
year = 2022
month = 6
day = 9

print("오늘은"+str(year)+"년"+str(month)+"월"+str(day)+"일입니다.")
# 오늘은2022년6월9일입니다.

print("오늘은 {}년 {}월 {}일 입니다.".format(year, month, day))
# 오늘은 2022년 6월 9일 입니다.

date_String = "오늘은 {}년 {}월 {}일 입니다."
print(date_String.format(year,month,day+1))
# 오늘은 2022년 6월 10일 입니다.

print("저는 {2},{1},{0} 모두 좋아하지 않습니다.".format("이재명","안철수","윤석열"))
# 저는 윤석열,안철수,이재명 모두 좋아하지 않습니다.

num_1 = 1
num_2 = 3
print("{0} 나누기 {1} 은 {2:.2f}이다.".format(num_1, num_2, num_1 / num_2))
# 1 나누기 3 은 0.33이다.

name = "최지웅"
age = 32

print("제 이름은 %s이고 %d살입니다." % (name, age))
# 제 이름은 최지웅이고 32살입니다.

name = "최지웅"
age = 32

print("제 이름은 {}이고 {}살입니다.".format(name, age))
# 제 이름은 최지웅이고 32살입니다.

name = "최지웅"
age = 32

print(f"제 이름은 {name}이고 {age}살입니다.")
# 제 이름은 최지웅이고 32살입니다.


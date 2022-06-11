# 객체 활용법
my_family = {
    '엄마': '김자옥',
    '아빠': '정보석',
    '아들': '윤시윤',
    '딸': '진지희'
}

print(my_family.values())
print(my_family.keys())
print(my_family.items())

for value in my_family.values():
    print(value)

for key in my_family.keys():
    print(key)

for key, value in my_family.items():
    print(key, value)


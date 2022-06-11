# 알파벳 리스트의 인덱싱
alphabets_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
print(alphabets_list[0])            #A
print(alphabets_list[1])            #B
print(alphabets_list[4])            #E
print(alphabets_list[-1])           #J

# 알파벳 문자열의 인덱싱
alphabets_string = 'ABCDEFGHIJ'
print(alphabets_string[0])          #A
print(alphabets_string[1])          #B
print(alphabets_string[4])          #E
print(alphabets_string[-1])         #J

# 알파벳 리스트의 반복문
alphabets_list = ['C', 'O', 'D', 'E', 'I', 'T']
for alphabet in alphabets_list:
    print(alphabet)     #CODEIT 순서대로 나옴

# 알파벳 문자열의 반복문
alphabets_string = 'CODEIT'
for alphabet in alphabets_string:
    print(alphabet)     #CODEIT 순서대로 나옴

# 알파벳 리스트의 슬라이싱
alphabets_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
print(alphabets_list[0:5])          #['A', 'B', 'C', 'D', 'E']
print(alphabets_list[4:])           #['E', 'F', 'G', 'H', 'I', 'J']
print(alphabets_list[:4])           #['A', 'B', 'C', 'D']

# 알파벳 문자열의 슬라이싱
alphabets_string = 'ABCDEFGHIJ'
print(alphabets_string[0:5])        #ABCDE
print(alphabets_string[4:])         #EFGHIJ
print(alphabets_string[:4])         #ABCD

# 리스트의 덧셈 연산
list1 = [1, 2, 3, 4]
list2 = [5, 6, 7, 8]
list3 = list1 + list2
print(list3)                        #[1, 2, 3, 4, 5, 6, 7, 8]

# 문자열의 덧셈 연산
string1 = '1234'
string2 = '5678'
string3 = string1 + string2
print(string3)                      #12345678

# 리스트의 길이 재기
print(len(['H', 'E', 'L', 'L', 'O']))           #5

# 문자열의 길이 재기
print(len("Hello, world!"))                     #13

# 리스트 데이터 바꾸기
numbers = [1, 2, 3, 4]
numbers[0] = 5
print(numbers)                                  #[5, 2, 3, 4]

# 문자열 데이터 바꾸기
name = "codeit"
name[0] = "C"
print(name)                                     #TypeError: 'str' object does not support item assignment


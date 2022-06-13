# 내용 덮어쓰기임
with open('new_file.txt', 'w') as f:
    f.write("Hello world!\n")
    f.write("My name is Codeit\n")

# 내용 추가
with open('new_file.txt', 'a') as f:
    f.write("Bye world!\n")
    f.write("Your name is userman")
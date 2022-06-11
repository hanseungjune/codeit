i = 1;

while( i < 101 ):
    if( i % 2 == 0):
        print(i)
        i += 1
    else:
        i += 1
        continue

i = 100

# 코드를 입력하세요.
while(i < 200):
    if(i%23 == 0):
        print(i)
        break
    else:
        i += 1
        continue

i = 100
while i % 23 != 0:
    i += 1

print(i)
print(True and True)        #   True
print(True and False)       #   False
print(False and True)       #   False
print(False and False)      #   False

print(True or True)         #   True
print(True or False)        #   True
print(False or True)        #   True
print(False or False)       #   False

print(not True)             #   False
print(not False)            #   True

print(2 > 1)                #   True
print(2 < 1)                #   False
print(3 >= 2)               #   True
print(3 <= 3)               #   True
print(2 == 2)               #   True
print(2 != 2)               #   False

print("Hello"=="Hello")     #   True
print("Hello"!="Hello")     #   False

print(2 > 1 and "Hello" == "Hello")     #True

print(not not True)                     #True
print(not not False)                    #False

print( 7 == 7 or ( 4 < 3 and 12 > 10 )) #True

x = 3
print(x > 4 or not (x < 2 or x == 3))   #False
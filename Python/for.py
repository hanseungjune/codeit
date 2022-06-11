# range(start, stop)
arr = []
for i in range(3, 11):
    arr.append(i)
print(arr)  # [3, 4, 5, 6, 7, 8, 9, 10]

# range(stop)
arr = []
for i in range(10):
    arr.append(i)
print(arr)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

# range(start, stop, step)
arr = []
for i in range(3, 16, 3):
    arr.append(i)
print(arr)  # [3, 6, 9, 12, 15]


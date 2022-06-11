print(type(3))  # <class 'int'>
print(type(3.0))  # <class 'float'>
print(type("3"))  # <class 'str'>

print(type("True"))  # <class 'str'>
print(type(True))  # <class 'bool'>


def hello():
    print("Hello world!")


print(type(hello))  # <class 'function'>
print(type(print))  # <class 'builtin_function_or_method'>
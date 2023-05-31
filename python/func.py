def my_function(a, b, c=15):
    print(a, b, c)


my_function(1, 2, 3)  # 1,2,3
my_function(a=1, b=2)  # 1,2,15
my_function(b=2, a=1)  # 1,2,15


def my_function2(*args, **kwargs):
    print(args)
    print(kwargs)


my_function2(1, 2, b=3, c=4)


# 强制named argument
def my_function3(*, a, b):
    print(a, b)


my_function3(a=1, b=2)

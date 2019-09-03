import sys

try:
    total = sum(int(arg) for arg in sys.argv[1:])
    print('sum = ', total)
except ValueError as xError:
    print(xError)

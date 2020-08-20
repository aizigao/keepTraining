#! /usr/bin/env python3


'''
for findi
g a greatest common divisor is Euclid’s Algorithm
'''
def gcd(m,n):
    while m % n != 0:
        m = n
        n = m % n
    return n

print(gcd(20,10))

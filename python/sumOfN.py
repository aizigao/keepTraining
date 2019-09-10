#! /usr/bin/env python3

import time

def sumOfN(n):
    theSum = 0
    start = time.time()

    for num in range(1,n+1):
        theSum += num
    end = time.time()
    print("%10.7f secs"% (end - start))
    return theSum


def sumOfNQuick(n):
    start = time.time()
    re = ((n +1)*n)/2
    end = time.time()
    print("%10.7f secs"% (end - start))
    return re

print(sumOfN(10000000))
print(sumOfNQuick(10000000))




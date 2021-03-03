import time;
def sumOfN(n):
    start_at = time.time()
    the_sum = 0
    for i in range(1, n+1):
        the_sum += i
    end_at = time.time()
    return [the_sum, "sum is requred %10.7f seconds"%(end_at - start_at)]


def sumOfN2(n):
    start_at = time.time()
    the_sum = (n*(n+1))/2
    end_at = time.time()
    return [the_sum, "sum is requred %10.7f seconds"%(end_at - start_at)]


print(sumOfN(1000))
print(sumOfN2(1000))


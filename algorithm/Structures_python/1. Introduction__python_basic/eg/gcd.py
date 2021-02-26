def gcd(m, n):
    remain = m % n
    if remain == 0:
        return n
    return gcd(n, remain)


print(gcd(9, 6))
print(gcd(15, 10))


def gcdLoop(m, n):
    g_m = m
    g_n = n

    while g_m%g_n != 0:
        old_n = g_n
        g_n = g_m % old_n
        g_m = old_n
    return g_n


print(gcdLoop(9, 6))
print(gcdLoop(15, 10))
print(gcdLoop(15, 4))

from heapq import heappop, heappush


def heapsort(iterable):
    h = []

    for value in iterable:
        heappush(h, value)
    return [heappop(h) for i in range(len(h))]


print(
    heapsort([1, 3434, 55, 66, 222, 2])
)

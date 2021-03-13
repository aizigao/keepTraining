from heapq import heappop, heappush


def heapsort(iterable):
    h = []

    for value in iterable:
        heappush(h, value)
    return [heappop(h) for i in range(len(h))]

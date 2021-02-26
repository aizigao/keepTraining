'''
| **Case**            | **Best Case** | **Worst Case** | **Average Case** |
| :------------------ | :------------ | :------------- | :--------------- |
| item is present     | 1            | n            | n/2             |
| item is not present | n            | n             | n                |
'''


def sequentialSearch(alist, item):
    pos = 0
    found = False

    while pos < len(alist) and not found:

        if alist[pos] == item:
            found = True
        else:
            pos += 1
    return found


testlist = [1, 2, 32, 8, 17, 19, 42, 13, 0]
print(sequentialSearch(testlist, 3))
print(sequentialSearch(testlist, 13))

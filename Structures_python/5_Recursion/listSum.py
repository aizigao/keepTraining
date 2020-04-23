
def listsum(list):
    if len(list) == 1:
        return list[0]
    # // --
    return list[0] + listsum(list[1:])


print(listsum([2,4,6,8,10]))

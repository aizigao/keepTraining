print('--- numbic---')
print(2+3*4)
print((2+3)*4)
print(2**10)  # 平方
print(6/3)
print(7/3)
print(7//3)  # 取整除
print(7 % 3)  # remain
print(3/6)
print(3//6)
print(3 % 6)
print(2**100)


# ------------------

print('--- bool ---')


print(5 > 1 and 5 < 10)
print(not (5 < 3))


# -----

print('---- Collection Data Types')

list_test = [1, 3, True, 5, 3]
list_test2 = [2, 3, 3, 4]
print('list->', list_test)
print('list slicing->', list_test[1:4])
print('list in ->', 1 in list_test)
print('list len ->', len(list_test))
print('list concatentation ->', list_test + list_test2)

list_test.append('appended')
print('list append ->', list_test)

print('list repeat -> ', list_test * 3)

print('range ->', range(10))
print('range to List->', list(range(10)))
print('range 5 -10->', range(5, 10))
print('range 5-10,asc step->', list(range(10, 5, -1)))


print('-------- tuple -----')
tuple_test = {
    3, 6, 'cat', 4, 5, False
}
tuple_test_2 = {
    3, 6, False
}
print('tuple', tuple_test)
print('tuple <= ->', tuple_test_2 <= tuple_test)


print('----- dictionary')

dict = {
    'iowa': 'dfsdf',
    'widfdf': 'dfsdf'
}

print(dict)
print('get it =>', dict.get('iowa'))
print('get it =>', dict['iowa'])
print('get alt =>', dict.get('iowaXX', 'noneItem'))

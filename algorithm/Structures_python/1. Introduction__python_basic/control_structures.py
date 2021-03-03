print('----while')
counter = 1
while counter <= 5:
    print('counter', counter)
    counter += 1

print('----while end\n\n')

# ---------------------

print('----for')

for item in [1, 2, 3, 4, 5, 6]:
    print('item', item)

print('----for end')

# ---------------------
print('----for range')

for item in range(5):
    print('item', item)

print('----for range end')


print('---for enumerate')

for key, item in enumerate(['one', 'two', 'three', 'four']):
    print('key is  %s, item is %s' % (key, item))

print('---for enumerate end')


# list comprehension.

sqlist = []
for x in range(1, 11):
    sqlist.append(x*x)
print(sqlist)

sqlist2 = [x*x for x in range(1, 11)]
print(
    # --
    'list comprehension.',
    sqlist2
)

sqlist3 = [x*x for x in range(1, 11) if x % 2 != 0]

print(
    'list comprehension with filter',
    sqlist3)

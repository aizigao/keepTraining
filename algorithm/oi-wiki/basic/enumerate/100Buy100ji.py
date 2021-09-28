rst = []
for x in range(0, 101):
    for y in range(0, 101 - x):
        z = 100 - x - y

        if 5 * x + 3 * y + z / 3 == 100:
            rst.append([x, y, z])

print(rst)
def recMC(coinList, change):
    minCoins = change

    if change in coinList:
        return 1
    else:
        coinListLessThenChange = [c for c in coinList if c <= change]

        for i in coinListLessThenChange:
            numCoins = i + recMC(coinList, change - i)
            if numCoins < minCoins:
                minCoins = numCoins

    return minCoins


print(recMC([1, 5, 10, 25], 63))

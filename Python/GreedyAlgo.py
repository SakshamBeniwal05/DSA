def fractionalKnapsack(totalPrice, totalWeight, capacity):
    
    alol = [ (totalPrice[i], totalWeight[i], totalPrice[i]/totalWeight[i] ) for i in range(len(totalPrice)) ]
    profit = 0

    for i in range(len(alol)):
        for j in range(i+1, len(alol)):
            if(alol[i][2] < alol[j][2]):
                alol[i],alol[j] = alol[j],alol[i]

    for i in range(len(alol)):
        if capacity <= 0:
            break

        if (capacity > alol[i][1]):
            profit = profit + alol[i][0]
            capacity = capacity - alol[i][1]
        else:
            n = capacity - alol[i][1]
            if (n > 0):
                profit += n*alol[i][2]

    print(profit)


totalP = [24,21,12,10]
totalW = [7,3,4,4]
cap = 20
fractionalKnapsack(totalP,totalW,cap)
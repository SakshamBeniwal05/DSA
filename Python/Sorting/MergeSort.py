def mergeSort(arr, start, end):
    if start >= end:
        return

    midPoint = (start + end) // 2

    mergeSort(arr, start, midPoint)
    mergeSort(arr, midPoint + 1, end)

    conqure(arr, start, midPoint, end)


def conqure(arr, start, midPoint, end):
    s1 = midPoint - start + 1
    s2 = end - midPoint

    newS1 = [0] * s1
    newS2 = [0] * s2

    for x in range (s1):
        newS1[x] = arr[start + x]

    for y in range (s2):
        newS2[y] = arr[midPoint + y + 1]

    i = j = 0
    s = start

    while i < s1 and j < s2:
        if (newS1[i] <= newS2[j]):
            arr[s] = newS1[i]
            i += 1
        else:
            arr[s] = newS2[j]
            j += 1
        s+=1
    while i < s1:
        arr[s] = newS1[i]
        i += 1
        s += 1
                
    while j < s2:
        arr[s] = newS2[j]
        j += 1
        s += 1

arr = [9,45,23,2,1,40,545]
mergeSort(arr,0, (len(arr)-1))
print(arr)
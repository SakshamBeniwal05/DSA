def mergeSort(arr,start,end):
    if(start >= end):
        return
    m = (start + end) // 2
    
    print(f"{start} ---- {end}")
    
            
    mergeSort(arr,start,m)
    mergeSort(arr,m+1,end)

    merge(arr,start,m,end)

def merge(arr,start,mid,end):
    s1 = mid - start + 1
    s2 = end - mid

    newS1 = [0] * s1
    newS2 = [0] * s2

    for x in range(s1):
        newS1[x] = arr[start+x]
    for y in range(s2):
        newS2[y] = arr[mid+1+y]

    i = j = 0
    s = start

    while(i < s1 and j < s2):
        if (newS1[i] <= newS2[j]):
            arr[s] = newS1[i]
            i += 1
        else:
            arr[s] = newS2[j]
            j += 1
        s += 1

    while i < s1:
        arr[s] = newS1[i]
        i += 1
        s += 1

    # Copy any remaining elements from newRight
    while j < s2:
        arr[s] = newS2[j]
        j += 1
        s += 1


arr = [5, 1, 4, 2, 8]
mergeSort(arr,0, (len(arr) - 1))
print(arr)
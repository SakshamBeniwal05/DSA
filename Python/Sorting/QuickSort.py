def quickSort(arr,start,end):
    if(start >=end):
        return;

    pivot = partition(arr,start,end)

    quickSort(arr,start,pivot-1)
    quickSort(arr,pivot+1,end)


def partition(arr,start,end):
    pivot = (start+end)//2
    i = start
    j = end - 1

    arr[end],arr[pivot] = arr[pivot],arr[end]
    while True:
        while arr[i] < arr[end] and i <= j:
            i+=1
        while arr[j] > arr[end] and i <= j:
            j-=1
        if i>j:
            break
        arr[i],arr[j] = arr[j],arr[i]

    arr[i],arr[end] = arr[end],arr[i]

    return i

arr = [9,45,23,2,1,40,545]
quickSort(arr,0, (len(arr)-1))
print(arr)
function selectionSort(a) {
    for (let y = 0; y < a.length; y++) {
        let currentSmall = y
        for (let i = 0+y; i < a.length; i++) {
            if (a[currentSmall] > a[i]) {
                currentSmall = i
            }
        }
        let temp = a[y]
        a[y] = a[currentSmall]
        a[currentSmall] = temp

    }
}

const arr = [96,108,85,4,64, 25, 2, 22, 11];
selectionSort(arr);
console.log(arr)
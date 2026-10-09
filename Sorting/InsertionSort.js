const insertionSort = (a) => {
    const n = a.length

    for (let i = 1; i < n; i++) {
        let key = a[i]
        for (let j = i; j >= 0; j--) {
            if (a[j - 1] > key) {
                a[j] = a[j - 1]
                a[j-1] = key
            }
        }
    }

    return a;
}

const arr = [5, 1, 4, 2, 8];
insertionSort(arr);
console.log(arr); 
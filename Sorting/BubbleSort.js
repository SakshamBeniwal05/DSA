function bubbleSort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i; j++) {
            if (a[j] > a[j + 1]) {
                let tenp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = tenp
            }
        }
    }
    return a;
}

const arr = [5, 1, 4, 2, 8];
bubbleSort(arr);
console.log(arr); 
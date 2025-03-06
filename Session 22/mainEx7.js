let arr = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
for (let i = 0; i < arr.length; i++) {
    document.writeln(arr[i]);
}

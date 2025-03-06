let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let arr = {};
let maxFreq = 0;
let minValue = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (arr[num] === undefined) {
        arr[num] = 1;
    } else {
        arr[num]++;
    }
    if (arr[num] > maxFreq) {
        maxFreq = arr[num];
    }
}
for (let num in arr) {
    if (arr[num] === maxFreq && Number(num) < minValue) {
        minValue = Number(num);
    }
}
document.writeln(minValue);

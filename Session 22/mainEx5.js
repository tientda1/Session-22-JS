let number = prompt(`Nhập chuỗi số: `);
let evenSum = 0;
let oddSum = 0;
let arr = number.split('');
if (!isNaN(number)) {
    for(let i = 0; i<arr.length;i++){
        if(arr[i]%2==0){
            evenSum += Number(arr[i]);
        }else if(arr[i] %2 !== 0 ){
            oddSum += Number(arr[i]);
        }
    }
    document.writeln(`Tổng các số chẵn trong dãy là: ${evenSum} <br>`);
    document.writeln(`Tổng các số lẻ trong dãy là: ${oddSum}`);
}else {
    document.write("Dãy không hợp lệ");
}
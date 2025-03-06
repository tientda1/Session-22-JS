let element = prompt(`Nhập 1 chuỗi số: `);
let arr = element.split('');
let max = 0;
if (!isNaN(element)) {
    for(let i = 0;i<arr.length;i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    document.write(`${max} là số lớn nhất trong dãy`);
} else {
    document.write("Dãy không hợp lệ");
}


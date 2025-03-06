let arr = [2,5,7,4,1,8,6,2,5,7];
let input = +prompt('Nhập số cần tìm: ');
let count = 0;
for(let i = 0;i<10;i++){
    if(arr[i] === input){
        count++;
    }
}
document.writeln(`Số ${input} xuất hiện ${count} lần`);

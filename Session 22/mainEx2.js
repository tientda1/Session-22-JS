let numbers = [5,2,7,8,1,0];
let check = +prompt(`Nhập vào số bất kỳ: `);
let flag = false;
for(let i=0;i<numbers.length;i++){
    if(numbers[i] === check){
        flag = true;
}
}
if(flag){
    document.write(`Bingo`)
}else{
    document.writeln(`Chúc bạn may mắn lần sau`);
}
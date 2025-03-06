let element = prompt(`Nhập 1 chuỗi số muốn đảo ngược: `);
let arr = element.split('');
if (!isNaN(element)) {
    let reversed = arr.reverse().join('');
    document.write(reversed);
} else {
    document.write("Dãy không hợp lệ");
}
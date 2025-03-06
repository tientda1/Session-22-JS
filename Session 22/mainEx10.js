let choice;
let arr = [];
do {
    console.log(`MENU`);
    console.log(`1.Nhập vào mảng`);
    console.log(`2.Hiển thị mảng`);
    console.log(`3.Thêm phần tử`);
    console.log(`4.Sửa phần tử`);
    console.log(`5.Xóa phần tử`);
    console.log(`6.Thoát`);
    let choice = +prompt(`Nhập lựa chọn của bạn: `);
    switch(choice){
        case 1:
            let arrLength = +prompt(`Nhập số lượng phần tử: `);
            for(let i = 0;i < arrLength;i++){
                let element = prompt(`Nhập vào phần tử thứ ${i+1}`);
                arr[i] = element;
            }
            break;
        case 2:
            for(let i =0;i<arr.length;i++){
                console.log(arr[i]);
            }
            break;
        case 3:
            let element = prompt(`Nhập phần tử muốn thêm`);
            arr.push(element);
            console.log(arr[i]);
            break;
        case 4:
            let updateIndex = +prompt(`Nhập vị trí muốn sửa: `);
            let newValue = prompt(`Giá trị cũ là: ${arr[index]}.Nhập giá trị mới`);
            arr[updateIndex] = newValue;
            console.log(arr[i]);
            break;
        case 5:
            let deleteIndex = prompt(`Nhập vị trí muốn xóa: `);
            arr.splice(deleteIndex,1);
            console.log(arr[i]);
            break;
        default:
            alert(`Vui lòng nhập lại`);
    }
} while (choice!=6);


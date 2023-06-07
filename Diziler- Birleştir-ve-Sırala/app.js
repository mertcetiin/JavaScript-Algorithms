function DiziyiBirleştir() {
    let arr1 = [5, 2, 3, 9];
    let arr2 = [2, 9, 1];

    let newArr = arr1.concat(arr2);

    newArr.sort((a, b) => a - b);

    return newArr;
}

alert(DiziyiBirleştir());
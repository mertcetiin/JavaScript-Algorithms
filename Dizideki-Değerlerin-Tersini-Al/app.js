function DizininTersiniAl() {
    let arr = [-1, 2, -3];

    let tersi = [];

    for (let i = 0; i < arr.length; i++) {
        tersi.push(-(arr[i]));
    }
    return tersi;
}

alert(DizininTersiniAl())

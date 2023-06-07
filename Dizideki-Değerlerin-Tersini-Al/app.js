function DizininTersiniAl() {
    let arr = [-1, 2, -3];
    let tersi = [];

    for (let i = 0; i < arr.length; i++) {
        let rakam = arr[i];
        let tersRakam = -rakam;

        tersi.push(tersRakam);
    }

    return tersi;
}

alert(DizininTersiniAl());
function uygunTelNumarası() {
    let verilenNumara = '3121887733';

    let number = verilenNumara.split(' ');

    for (let i = 0; i < number.length; i++) {
        let num = number[i]

        let ilkNum = num.slice(0, 3);
        let ikinciNum = num.slice(3, 6);
        let kalanNum = num.slice(6);

        let result = '(' + ilkNum + ')' + ikinciNum + '-' + kalanNum
        return result;
    }
}

alert(uygunTelNumarası());

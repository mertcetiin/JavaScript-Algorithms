function gucluSayi() {
    let sayi = 145;
    let faktöriyelToplam = 0;

    let sayiString = sayi.toString();

    for (let i = 0; i < sayiString.length; i++) {
        let basamak = parseInt(sayiString[i]);
        let faktöriyel = 1;
        for (let j = 1; j <= basamak; j++) {
            faktöriyel *= j;
        }
        faktöriyelToplam += faktöriyel;
    }
    if (faktöriyelToplam === sayi) {
        return 'Güçlü sayı!';
    } else {
        return 'Güçlü sayı değil';
    }
}

alert(gucluSayi());
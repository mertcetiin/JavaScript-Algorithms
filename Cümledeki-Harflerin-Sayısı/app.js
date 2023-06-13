function cumledekiHarfSayisi() {
    let girilenCumle = 'Hello World';
    let harfSayilari = {};

    let cumle = girilenCumle.toLowerCase();

    for (let i = 0; i < cumle.length; i++) {
        let harf = cumle[i];

        if (harf >= 'a' && harf <= 'z') {
            if (harfSayilari[harf]) {
                harfSayilari[harf]++;
            } else {
                harfSayilari[harf] = 1;
            }
        }
    }

    let sonuc = '';
    for (let harf in harfSayilari) {
        sonuc += harf + ': ' + harfSayilari[harf] + ' kez\n';
    }

    return sonuc;
}

alert(cumledekiHarfSayisi());
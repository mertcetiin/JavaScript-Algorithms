function arkaArkayaGeliyoMu() {
    let sayi = [11, 10, 9, 8, 7];
    let artan = true;
    let azalan = true;

    for (let i = 0; i < sayi.length - 1; i++) {
        if (sayi[i] > sayi[i + 1]) {
            artan = false;
        }

        if (sayi[i] < sayi[i + 1]) {
            azalan = false;
        }
    }

    if (artan) {
        return 'Evet, arka arkaya.';
    } else if (azalan) {
        return 'Evet, arka arkaya.';
    } else {
        return 'Hayır, arka arkaya değil.';
    }
}

alert(arkaArkayaGeliyoMu());
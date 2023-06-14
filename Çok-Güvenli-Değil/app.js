function guvenliDegil() {
    let girilenSayi = 'a4A8';

    let sayi = girilenSayi.split('');

    for (let i = 0; i < sayi.length; i++) {
        let harf = sayi[i];

        if (!/^[a-zA-Z0-9]+$/.test(harf)) {
            return false;
        }
    }

    return true;
}

alert(guvenliDegil());
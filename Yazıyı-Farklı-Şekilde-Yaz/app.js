function yaziyiFarkliYaz() {
    let girilenKelime = 'Test midir bu';
    let result = '';

    let büyükYap = girilenKelime.split(' ');

    for (let i = 0; i < büyükYap.length; i++) {
        let kelime = büyükYap[i];
        let yeniKelime = '';

        for (let j = 0; j < kelime.length; j++) {
            if (j % 2 === 0) {
                yeniKelime += kelime[j].toUpperCase();
            } else {
                yeniKelime += kelime[j].toLowerCase();
            }
        }
        result += yeniKelime + ' ';
    }
    return result;
}

alert(yaziyiFarkliYaz());

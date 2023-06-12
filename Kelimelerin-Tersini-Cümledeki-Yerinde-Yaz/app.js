function kelimelerinTersiniYaz() {
    let kelime = 'merhaba dünya';
    let result = '';

    let ters = kelime.split(' ');

    for (let i = 0; i < ters.length; i++) {
        let tersKelime = ters[i].split('').reverse().join('');
        result += tersKelime + ' ';
    }
    return result;
}

alert(kelimelerinTersiniYaz());
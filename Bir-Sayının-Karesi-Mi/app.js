function sayınınKaresi() {
    let girilenSayi = 9;
    let result = '';

    if (Math.sqrt(girilenSayi) % 1 === 0) {
        result = 'Evet, bir sayının karesi.';
    } else {
        result = 'Bir sayının karesi değil!';
    }

    return result;
}
alert(sayınınKaresi());
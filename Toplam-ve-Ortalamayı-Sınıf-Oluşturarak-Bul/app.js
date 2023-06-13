function toplamlarıVeOrtalamayıBul() {
    let sayilar = '1 2 3';
    let toplam = 0;
    let ortalama = 0;

    let number = sayilar.split(' ');

    for (let i = 0; i < number.length; i++) {
        let sayi = Number(number[i]);
        toplam += sayi;
    }

    if (number.length > 0) {
        ortalama = toplam / number.length;
    }

    return 'Toplam: ' + toplam + ', Ortalama: ' + ortalama;
}

alert(toplamlarıVeOrtalamayıBul());
function enKisaKelimeUzunlugu() {

    let girilenCumle = 'Bu bir deneme metnidir.';

    girilenCumle = girilenCumle.replace(/[.;]$/, '');

    let kelimeler = girilenCumle.split(' ');

    let enKisaUzunluk = Infinity;

    for (let i = 0; i < kelimeler.length; i++) {
        let kelime = kelimeler[i].replace(/[.;]/g, '');
        if (kelime.length < enKisaUzunluk) {
            enKisaUzunluk = kelime.length;
        }
    }
    return enKisaUzunluk;
}

alert('En kısa kelimenin uzunluğu: ' + enKisaKelimeUzunlugu());
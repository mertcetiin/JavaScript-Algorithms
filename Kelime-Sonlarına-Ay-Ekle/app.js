function kelimelerinSonlarınaAyEkle() {
    let verilenKelime = 'Merhaba Dünya';

    let kelime = verilenKelime.split(' ');

    let donusturulmusKelime = kelime.map(item => {
        let ilkHarf = item.slice(0, 1);
        let geriKalan = item.slice(1);

        return geriKalan + ilkHarf + 'ay';
    });
    let result = donusturulmusKelime.join(' ');
    return result;
}

alert(kelimelerinSonlarınaAyEkle());

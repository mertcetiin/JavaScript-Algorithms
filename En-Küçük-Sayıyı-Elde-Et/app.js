function enKucukSayiOlustur() {
    let sayiDizisi = [7, 7, 4, 4, 1];

    let benzersizDizi = [...new Set(sayiDizisi)];

    benzersizDizi.sort((a, b) => a - b);

    let enKucukSayi = parseInt(benzersizDizi.join(''));

    return enKucukSayi;
}

alert(enKucukSayiOlustur());
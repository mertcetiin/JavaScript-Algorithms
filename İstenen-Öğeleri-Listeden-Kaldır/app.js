function listedenKaldır() {
    let sayiListesi = [1, 1, 2, 3, 1, 2, 3, 4];
    let silinecekSayiListesi = [1, 3];

    for (let i = 0; i < silinecekSayiListesi.length; i++) {
        sayiListesi = sayiListesi.filter(number => number !== silinecekSayiListesi[i]);
    }

    return sayiListesi;
}

alert(listedenKaldır());
function yaziyaCevir() {
    let sayi = 67;

    let birler = ["", "bir", "iki", "üç", "dört", "beş", "altı", "yedi", "sekiz", "dokuz"];
    let onlar = ["", "on", "yirmi", "otuz", "kırk", "elli", "altmış", "yetmiş", "seksen", "doksan"];

    if (sayi < 10) {
        return birler[sayi];
    } else if (sayi % 10 === 0) {
        return onlar[Math.floor(sayi / 10)];
    } else {
        return onlar[Math.floor(sayi / 10)] + ' ' + birler[sayi % 10];
    }
}

alert(yaziyaCevir())
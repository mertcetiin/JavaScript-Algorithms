function DersNotlarıSıralaması() {
    let Dersler = {
        Almanca: 40,
        İngilizce: 71,
        Çince: 93
    };

    let YüksekNotlar = [];

    for (let [ders, not] of Object.entries(Dersler)) {
        if (not > 50) {
            YüksekNotlar.push({ ders, not });
        }
    }
    YüksekNotlar.sort((a, b) => b.not - a.not);

    return YüksekNotlar;
}

let sonuclar = DersNotlarıSıralaması();
let mesaj = 'Yüksek not aldığın dersler:\n';

for (let i = 0; i < sonuclar.length; i++) {
    mesaj += sonuclar[i].ders + ':' + sonuclar[i].not + '\n';
}

alert(mesaj);

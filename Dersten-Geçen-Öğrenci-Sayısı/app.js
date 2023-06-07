function FinalNotlar() {
    let Notlar = [50, 72, 18, 55, 45, 94, 64, 48, 82, 36];
    let toplamNot = 0;
    let gecenSayisi = 0;

    for (let i = 0; i < Notlar.length; i++) {
        toplamNot += Notlar[i];

        if (Notlar[i] >= gecmeNotu) {
            gecenSayisi++;
        }
    }

    let ortalama = toplamNot / Notlar.length;
    let sonuclar = {
        gs: gecenSayisi,
        ort: ortalama.toFixed(2)
    };
    return sonuclar;
}

let gecmeNotu = 60;
let sonuclar = FinalNotlar();
let mesaj = 'Geçme notu ' + gecmeNotu + ' olan dersten:\n';
mesaj += sonuclar.gs + ' öğrenci geçti.\n';
mesaj += 'Sınıf ortalaması: ' + sonuclar.ort;

alert(mesaj);
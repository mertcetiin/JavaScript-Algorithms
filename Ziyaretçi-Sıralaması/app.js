function ziyaretciSıralaması() {
    let ziyaretci = {
        a: 200,
        b: 100,
        c: 450,
    };

    let sıraliZiyaretci = Object.keys(ziyaretci).sort((a, b) => ziyaretci[a] - ziyaretci[b]);

    let sıraliZiyaretciDegerleri = sıraliZiyaretci.map((sehir) => ziyaretci[sehir]);

    return sıraliZiyaretciDegerleri;
}

alert(ziyaretciSıralaması());

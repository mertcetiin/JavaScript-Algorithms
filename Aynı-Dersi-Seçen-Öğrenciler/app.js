function dersleriTopla() {
    let aDersiniAlanlar = [10, 60, 80, 70, 40, 90];
    let bDersiniAlanlar = [50, 30, 20, 10, 90, 60];

    let ortakDers = [];

    for (let i = 0; i < aDersiniAlanlar.length; i++) {
        for (let j = 0; j < bDersiniAlanlar.length; j++) {
            if (aDersiniAlanlar[i] === bDersiniAlanlar[j]) {
                ortakDers.push(aDersiniAlanlar[i])
            }
        }
    }

    ortakDers.sort((a, b) => a - b)

    let message = ('Her iki dersi alan öğrencilerin numaraları: \n')

    ortakDers.forEach(numara => {
        message += numara + '\n'
    });
    alert(message);
}

dersleriTopla()
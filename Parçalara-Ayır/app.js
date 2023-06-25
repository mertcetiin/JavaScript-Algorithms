function parcalaraAyır() {
    let verilenKelime = 'merhabadunya'
    let parca = 3;
    let result = '';

    let kelime = verilenKelime.split('')

    for (let i = 0; i < kelime.length; i++) {
        if ((i + 1) % parca === 0) {
            result += kelime[i] + ' '
        } else {
            result += kelime[i]
        }
    }
    return result.trim()
}

alert(parcalaraAyır());
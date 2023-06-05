function benzersizHarfleriBul() {
    let kelime = 'aabbccddeeff';
    let benzersizHarfler = [];

    for (let i = 0; i < kelime.length; i++) {
        if (benzersizHarfler.indexOf(kelime[i]) === -1) {
            benzersizHarfler.push(kelime[i]);
        }
    }

    return benzersizHarfler;
}

alert(benzersizHarfleriBul());
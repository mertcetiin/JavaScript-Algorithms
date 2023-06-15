function harfinSiraSayisiKadarTekrarEt() {
    let kelime = 'abcdef';
    let result = '';

    for (let i = 0; i < kelime.length; i++) {
        let harf = kelime[i]

        result += harf.toUpperCase();
        result += harf.toLowerCase().repeat(i);

        if (i !== kelime.length - 1) {
            result += '-';
        }
    }
    return result;
}

alert(harfinSiraSayisiKadarTekrarEt());

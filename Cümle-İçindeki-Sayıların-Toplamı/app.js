function girilenIfade() {
    let kelime = 'bu10deneme20midir30';
    let currentNumber = 0;
    let result = 0;

    for (let i = 0; i < kelime.length; i++) {
        if (!isNaN(kelime[i])) {
            currentNumber = currentNumber * 10 + parseInt(kelime[i])
        } else {
            result += currentNumber;
            currentNumber = 0
        }
    }

    return result += currentNumber
}

alert(girilenIfade())
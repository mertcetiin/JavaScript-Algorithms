function girilenSayi() {
    let number = 24;
    let result = 'Bölen sayı adedi: '
    let count = 0

    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            count++
        }
    }
    return result += count
}

alert(girilenSayi())
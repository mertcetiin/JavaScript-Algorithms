function sayiyiDonustur() {
    let sayi = 5;
    let result = '';

    let birlerBasamagi = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let onlarBasamagi = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let yuzlerBasamagi = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let binlerBasamagi = ["", "M", "MM", "MMM"];

    if (sayi < 1 || sayi > 3999) {
        return 'Geçersiz sayi'
    }

    if (sayi >= 1000) {
        result += binlerBasamagi[Math.floor(sayi / 1000)]
        sayi %= 1000
    }

    if (sayi >= 100) {
        result += yuzlerBasamagi[Math.floor(sayi / 100)]
        sayi %= 100
    }

    if (sayi >= 10) {
        result += onlarBasamagi[Math.floor(sayi / 10)];
        sayi %= 10;
    }

    if (sayi >= 1) {
        result += birlerBasamagi[sayi]
    }
    return result
}

alert(sayiyiDonustur())
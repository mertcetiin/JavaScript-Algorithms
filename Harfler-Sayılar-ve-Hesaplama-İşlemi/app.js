function sayilariTopla() {
    let sayi = 'gdf1dg1gf*4aP0';
    let s1 = '';
    let s2 = '';
    let operator = null;

    for (let i = 0; i < sayi.length; i++) {
        let harf = sayi[i]

        if (!isNaN(harf)) {
            if (operator === null) {
                s1 += harf;
            } else {
                s2 += harf;
            }
        } else if ('+-*/'.includes(harf)) {
            operator = harf;
        }
    }
    s1 = parseFloat(s1);
    s2 = parseFloat(s2);

    let result;

    switch (operator) {
        case '+':
            result = s1 + s2;
            break;
        case '-':
            result = s1 - s2;
            break;
        case '*':
            result = s1 * s2;
            break;
        case '/':
            result = s1 / s2;
            break;
        default:
            result = NaN;
            break;
    }
    result = Math.round(result * 100) / 100;
    return result;
}

alert(sayilariTopla())

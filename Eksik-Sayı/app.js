function EksikSayıBul() {
    let nums = [1, 4, 5, 3];
    let EksikNum;

    for (let i = 1; i < nums.length; i++) {
        if (!nums.includes(i)) {
            EksikNum = i;
            break;
        }
    }
    return EksikNum;
}

alert('Eksik Sayı: ' + EksikSayıBul())
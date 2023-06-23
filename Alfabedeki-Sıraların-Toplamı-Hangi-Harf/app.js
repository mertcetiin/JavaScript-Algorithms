function harfToplaminiBul(girilenHarfler) {
    let alfabe = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 };

    girilenHarfler = girilenHarfler.toLowerCase()

    let results = 0;

    for (let i = 0; i < girilenHarfler.length; i++) {
        let harf = girilenHarfler[i]

        if (harf in alfabe) {
            results += alfabe[harf]
        }
    }
    results = results % 26;

    if (results === 0) {
        alert('Z')
    } else {
        alert(String.fromCharCode(96 + results))
    }
}

harfToplaminiBul('ycb');

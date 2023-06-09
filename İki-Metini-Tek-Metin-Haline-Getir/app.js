function ikiMetniTekYap() {
    let birinciMetin = 'bbcaa';
    let ikinciMetin = 'cdddb';

    let birlestirilmisMetin = Array.from(birinciMetin + ikinciMetin);

    let siralanmisMetin = birlestirilmisMetin.sort();

    let tekMetin = '';
    for (let i = 0; i < siralanmisMetin.length; i++) {
        if (siralanmisMetin[i] !== siralanmisMetin[i + 1]) {
            tekMetin += siralanmisMetin[i];
        }
    }
    return tekMetin;
}

alert(ikiMetniTekYap());

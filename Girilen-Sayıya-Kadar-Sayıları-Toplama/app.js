const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let numsDOM = document.querySelector('.nums').value

    let toplam = 0
    let s1 = Number(numsDOM)


    for (sonuc = 1; sonuc <= s1; sonuc++) {
        toplam = toplam + sonuc;
    }

    document.getElementById('sonuc').innerHTML = 'Sonuç : ' + toplam;
});
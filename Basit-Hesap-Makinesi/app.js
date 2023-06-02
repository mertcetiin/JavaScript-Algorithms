const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let smallDOM = document.querySelector('.small').value
    let bigDOM = document.querySelector('.big').value
    let islemDOM = document.querySelector('.islem').value

    let s1 = Number(smallDOM)
    let s2 = Number(bigDOM)

    if (islemDOM == 'toplama') {
        sonuc = s1 + s2
    } else if (islemDOM == 'cıkarma') {
        sonuc = s1 - s2
    } else if (islemDOM == 'carpma') {
        sonuc = s1 * s2
    } else {
        sonuc = s1 / s2
    }

    document.getElementById('sonuc').innerHTML = `Sonuç: ${sonuc}`

})
const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {

    let s1 = document.querySelector('.sayi1').value
    let s2 = document.querySelector('.sayi2').value

    let durum = ''

    if (s1 > s2) {
        durum = 'birinci sayi 2.sayıdan büyüktür'
    } else if (s2 > s1) {
        durum = 'İkinci sayı 1.sayıdan büyüktür'
    } else {
        durum = 'İki sayı birbirine eşittir.'
    }
    document.getElementById('sonuc').innerHTML = durum
})
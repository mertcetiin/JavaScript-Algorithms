const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let taban = document.querySelector('.taban').value
    let yükseklik = document.querySelector('.yükseklik').value

    let hesapla = (taban * yükseklik) / 2

    document.getElementById('sonuc').innerHTML = `Üçgenin alanı : ${hesapla}`
})

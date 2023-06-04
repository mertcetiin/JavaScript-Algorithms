const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let half = document.querySelector('.yarı').value

    let alan = 3.14 * (half ** 2)
    let cevre = Math.floor(2 * 3.14 * half)

    document.getElementById('sonuc').innerHTML = `Dairenin alanı: ${alan}, Dairenin Çevresi: ${cevre}`
})
const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let kısaDOM = document.querySelector('.kısa').value
    let uzunDOM = document.querySelector('.uzun').value

    kk = Number(kısaDOM)
    uk = Number(uzunDOM)

    let dCevre = 2 * (kk + uk);
    let dAlan = kk * uk;

    document.getElementById('cevre').innerHTML = `Çevre: ${dCevre}`
    document.getElementById('alan').innerHTML = `Alan: ${dAlan}`
})

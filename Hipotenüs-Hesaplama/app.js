const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {

    let kısaDOM = document.querySelector('.kısa').value
    let uzunDOM = document.querySelector('.uzun').value

    let kısa = Number(kısaDOM)
    let uzun = Number(uzunDOM)

    let hesaplama = Math.sqrt((kısa ** 2) + (uzun ** 2))

    document.getElementById('sonuc').innerHTML = `Hipotenüs: ${hesaplama}`

})
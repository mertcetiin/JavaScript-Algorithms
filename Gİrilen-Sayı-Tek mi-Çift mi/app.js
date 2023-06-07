const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {

    let numsDOM = document.querySelector('.nums').value

    sayi = Number(numsDOM)

    let durum = ''

    if (sayi % 2 == 0) {
        durum = 'çift'
    } else {
        durum = 'tek'
    }

    document.getElementById('sonuc').innerHTML = `${sayi} sayısı ${durum}.`
})
const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let not = document.querySelector('.not').value

    let durum = ''

    if (not < 50) {
        durum = 'Kaldı'
    } else if (not >= 50 && not < 70) {
        durum = 'Geçti'
    } else if (not >= 70 && not < 85) {
        durum = 'Teşekkür Belgesi.'
    } else if (not >= 85 && not <= 100) {
        durum = 'Takdir Belgesi.'
    } else {
        durum = 'Geçersiz Puan'
    }

    document.getElementById('sonuc').innerHTML = 'Durum: ' + durum
})
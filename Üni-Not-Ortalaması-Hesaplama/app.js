const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let vizeDOM = document.querySelector('.vize').value
    let finalDOM = document.querySelector('.final').value

    let ortalama = (Number(vizeDOM * 0.4) + Number(finalDOM * 0.6));

    let not = ''

    if (ortalama >= 84.5 && ortalama <= 100) {
        not = 'AA.'
    } else if (ortalama >= 69.5 && ortalama <= 84.5) {
        not = 'BB.'
    } else if (ortalama >= 59.5 && ortalama < 69.5) {
        not = 'CC.'
    } else if (ortalama >= 49.5 && ortalama < 59.5) {
        not = 'DD.'
    } else {
        not = 'FF.'
    }

    document.getElementById('sonuc').innerHTML = `${ortalama} => ${not}`
})

// kilo / (boy * boy)

const submitDOM = document.querySelector('.submit')

submitDOM.addEventListener('click', () => {

    let boy = document.querySelector('.boy').value
    let kilo = document.querySelector('.kilo').value

    let IndeksHesaplama = Math.floor(Number(kilo) / Number(boy * boy))

    let durum = ''

    if (IndeksHesaplama < 18) {
        durum = 'Zayıf'
    } else if (IndeksHesaplama >= 18 && IndeksHesaplama < 25) {
        durum = 'Normal'
    } else if (IndeksHesaplama >= 25 && IndeksHesaplama < 30) {
        durum = 'Kilolu'
    } else if (IndeksHesaplama >= 30 && IndeksHesaplama < 40) {
        durum = 'Obez'
    } else {
        durum = 'İleri Derece Obez'
    }

    alert(`${durum}  ${IndeksHesaplama}`)
})
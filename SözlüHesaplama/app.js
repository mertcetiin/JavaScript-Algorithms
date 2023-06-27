const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    const y1 = document.querySelector('.yazili1').value
    const y2 = document.querySelector('.yazili2').value
    const y3 = document.querySelector('.yazili3').value

    let ortalama = (Number(y1) + Number(y2) + Number(y3)) / 3;

    let durum = ''
    if (ortalama < 50) {
        durum = 'Kaldı'
    } else {
        durum = 'Geçti'
    }

    document.getElementById('ort').innerHTML = `Not Ortalamanız: ${ortalama}`
    document.getElementById('sonuc').innerHTML = durum
})


// function hesapla() {
//     let y1 = document.querySelector('.yazili1').value
//     let y2 = document.querySelector('.yazili2').value
//     let y3 = document.querySelector('.yazili3').value

//     let ortalama = (Number(y1) + Number(y2) + Number(y3)) / 3;

//     let durum = '';

//     if (ortalama < 50) {
//         durum = 'Kaldı'
//     } else {
//         durum = 'Geçti'
//     }
//     document.getElementById("ort").innerHTML = ortalama;
//     document.getElementById("sonuc").innerHTML = durum;
// }
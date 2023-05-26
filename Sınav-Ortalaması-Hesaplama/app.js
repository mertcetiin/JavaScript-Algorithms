const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let y1 = document.querySelector('.yazili1').value
    let y2 = document.querySelector('.yazili2').value
    let y3 = document.querySelector('.yazili3').value

    let ortalama = (Number(y1) + Number(y2) + Number(y3)) / 3;

    let durum = ''

    if (ortalama >= 85 && ortalama <= 100) {
        durum = 'AA'
    } else if (ortalama >= 65 && ortalama < 85) {
        durum = 'BB'
    } else if (ortalama >= 50 && ortalama < 65) {
        durum = 'CC'
    } else {
        durum = 'FF'
    }

    document.getElementById('ort').innerHTML = `${durum}: ${ortalama}`
});

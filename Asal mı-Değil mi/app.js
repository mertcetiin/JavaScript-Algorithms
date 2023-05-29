const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let kontrol = 0
    let numsDOM = document.querySelector('.nums').value

    let s = Number(numsDOM)

    for (let i = 2; i < s; i++) {
        if (s % i == 0)
            kontrol++
    }
    if (kontrol != 0)
        document.getElementById('sonuc').innerHTML = s + ' sayısı asal değildir';
    else
        document.getElementById('sonuc').innerHTML = s + ' sayısı asaldır.';


})
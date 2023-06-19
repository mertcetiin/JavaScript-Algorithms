const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let taban = document.querySelector('.taban').value
    let us = document.querySelector('.üs').value

    let hesaplama = taban ** us

    // let sonuc = 1;

    // for (i = 0; i < us; i++) {
    //     sonuc = sonuc * taban
    // }

    document.getElementById('sonuc').innerHTML = `Sonuç: ${hesaplama}`
})

const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let sayi1 = document.querySelector('.sayi1').value
    let sayi2 = document.querySelector('.sayi2').value

    let s1 = Number(sayi1)
    let s2 = Number(sayi2)


    while (toplam = s1 + s2) {
        document.getElementById('sonuc').innerHTML = `Toplam: ${toplam}`
        i++
    }


    // let toplam = 0
    // for (i = s1; i <= s2; i++) {
    //     toplam = s1 + i
    // }
    // document.getElementById('sonuc').innerHTML = `Toplam: ${toplam}`
})  
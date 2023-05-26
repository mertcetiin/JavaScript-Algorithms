const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let sayi = document.querySelector('.sayı').value;

    let faktoriyel = 1
    sayi = Number(sayi)

    if (sayi >= 0) {
        for (let i = 1; i <= sayi; i++) {
            faktoriyel = faktoriyel * i
        }
    }

    document.getElementById("sonuc").innerHTML = `Sonuç: ${faktoriyel}`;
})
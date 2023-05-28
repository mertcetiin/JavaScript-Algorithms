const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let sayi = parseInt(document.querySelector('.sayi').value)
    let reverse = 0;


    while (sayi != 0) {
        reverse = reverse * 10;
        reverse = reverse + sayi % 10;
        sayi = Math.floor(sayi / 10);
    }

    window.alert(reverse);
})
const toplaDOM = document.querySelector('.topla');

toplaDOM.addEventListener('click', () => {
    let sayi1 = document.querySelector('.sayi1').value
    let sayi2 = document.querySelector('.sayi2').value

    let topla = Number(sayi1) + Number(sayi2)

    document.getElementById('sonuc').innerHTML = `Sonuç : ${topla}`
});


const cıkarDOM = document.querySelector('.cıkar');

cıkarDOM.addEventListener('click', () => {
    let sayi1 = document.querySelector('.sayi1').value
    let sayi2 = document.querySelector('.sayi2').value

    let cıkar = Number(sayi1) - Number(sayi2)

    document.getElementById('sonuc').innerHTML = `Sonuç : ${cıkar}`
});


const bölDOM = document.querySelector('.böl');

bölDOM.addEventListener('click', () => {
    let sayi1 = document.querySelector('.sayi1').value
    let sayi2 = document.querySelector('.sayi2').value

    let böl = Number(sayi1) / Number(sayi2)

    document.getElementById('sonuc').innerHTML = `Sonuç : ${böl}`
});


const carpDOM = document.querySelector('.carp');

carpDOM.addEventListener('click', () => {
    let sayi1 = document.querySelector('.sayi1').value
    let sayi2 = document.querySelector('.sayi2').value

    let carp = Number(sayi1) * Number(sayi2)

    document.getElementById('sonuc').innerHTML = `Sonuç : ${carp}`
});

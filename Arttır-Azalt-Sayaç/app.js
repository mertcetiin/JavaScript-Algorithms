const valueDOM = document.querySelector('.value');
const artırmakDOM = document.querySelector('.artırmak');
const azaltmakDOM = document.querySelector('.azaltmak');

let count = 0

artırmakDOM.addEventListener('click', () => {
    valueDOM.innerHTML = ++count
})

azaltmakDOM.addEventListener('click', () => {
    valueDOM.innerHTML = --count
})
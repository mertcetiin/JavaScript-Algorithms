const submitDOM = document.querySelector('.submit');

submitDOM.addEventListener('click', () => {
    let upper = document.querySelector('.upper').value

    let parca = upper.split(' ')

    for (let i = 0; i < parca.length; i++) {
        let j = parca[i].charAt(0).toUpperCase();
        parca[i] = j + parca[i].substr(1).toLowerCase()
    }
    document.getElementById('yaz').innerHTML = parca.join(' ')
})
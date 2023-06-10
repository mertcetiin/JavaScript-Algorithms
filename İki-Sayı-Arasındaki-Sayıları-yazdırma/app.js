const yazDOM = document.querySelector('.yaz');

yazDOM.addEventListener('click', () => {
    let smallDOM = document.querySelector('.small').value
    let bigDOM = document.querySelector('.big').value

    for (let i = smallDOM; i <= bigDOM; i++) {
        document.getElementById('list').innerHTML += '<p>' + i + '</p>'
    }
});
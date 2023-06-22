const addDOM = document.querySelector('.add');
const inputDOM = document.querySelector('.input');
const listDOM = document.querySelector('#list')

addDOM.addEventListener('click', () => {
    let newList = document.createElement('li')

    listDOM.append(newList)
    newList.innerHTML = inputDOM.value
    inputDOM.value = ''
})

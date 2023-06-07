function DostMuDüşmanMı() {
    let name = ['Ali', 'Burak', 'Adem', 'Neşe', 'Mehmet'];

    let newArr = [];

    for (let i = 0; i < name.length; i++) {
        if (name[i].length === 4) {
            newArr.push(name[i])
        }
    }
    return newArr;
}

alert(DostMuDüşmanMı())
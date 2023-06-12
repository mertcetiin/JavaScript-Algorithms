function kimBegenmis() {
    let begenenler = ['Ali', 'Ece', 'Mert', 'Mustafa'];

    if (begenenler.length === 0) {
        return 'Henüz kimse beğenmedi.'
    } else if (begenenler.length === 1) {
        return begenenler[0] + ' kişisi beğendi'
    } else if (begenenler.length === 2) {
        return begenenler[0] + ' ve ' + begenenler[1] + ' kişisi beğendi.'
    } else {
        let begenenSayisi = begenenler.length - 1;
        return begenenler[0] + ' ve ' + begenenSayisi + ' kişi daha beğendi'
    }

}

alert(kimBegenmis())
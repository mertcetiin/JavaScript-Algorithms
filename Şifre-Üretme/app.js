function rastgeleSembol(uzunluk, semboller) {
    let maske = '';
    if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
    if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (semboller.indexOf('0') > -1) maske += '0123456789';
    if (semboller.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    let sonuc = '';

    for (let i = uzunluk; i > 0; --i) {
        sonuc += maske[Math.floor(Math.random() * maske.length)];
    }
    return sonuc;
}

alert(rastgeleSembol(10, 'aA0#'));







// const submitDOM = document.querySelector('.submit')

// submitDOM.addEventListener('click', (uzunluk, semboller) => {

//     let maske = '';
//     if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
//     if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     if (semboller.indexOf('0') > -1) maske += '0123456789';
//     if (semboller.indexOf('#') > -1) maske += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
//     let sonuc = '';

//     for (let i = uzunluk; i > 0;) {
//         sonuc += maske[Math.floor(Math.random() * maske.length)];
//     }
    // return sonuc;



// })
function kelimeyiBüyükYap() {
    let kelime = 'Bu bir deneme yazısı olabilir belki';
    let result = '';

    let arr = kelime.split(' ');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 5) {
            let ters = arr[i].split('').reverse().join('');
            result += ters + ' ';
        } else {
            result += arr[i] + ' ';
        }
    }
    return result;
}

alert(kelimeyiBüyükYap());
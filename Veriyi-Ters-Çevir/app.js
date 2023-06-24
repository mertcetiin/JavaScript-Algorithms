function veriyiTersCevir() {
    let veri = '11111111 00000000 00001111 10101010';
    let result = '';

    let tersVeri = veri.split(' ').reverse();

    result += tersVeri.join(' ');

    return result;
}

alert(veriyiTersCevir());
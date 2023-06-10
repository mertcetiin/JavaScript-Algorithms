function eksikSayiyiBul() {
    let sayiDizisi = [1, 3, 5, 7, 11];
    let eksikSayi;

    let artisMiktari = sayiDizisi[1] - sayiDizisi[0];

    for (let i = 1; i < sayiDizisi.length; i++) {
        if (sayiDizisi[i] - sayiDizisi[i - 1] !== artisMiktari) {
            eksikSayi = sayiDizisi[i] - artisMiktari;
            break;
        }
    }
    return eksikSayi;
}

alert(eksikSayiyiBul())
function numberMaskele() {
    let girilenNumber = "12345678";
    let maskele = '#';

    if (girilenNumber.length > 4) {
        girilenNumber = maskele.repeat(girilenNumber.length - 4) + girilenNumber.slice(-4);
    }
    return girilenNumber;
}

alert(numberMaskele());
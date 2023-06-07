function enBuyukİkiYas() {
    let age = [1, 2, 10, 3, 8]

    let BigAge = age.sort((a, b) => b - a).slice(0, 2)

    BigAge.reverse()

    return BigAge;
}

alert(enBuyukİkiYas())
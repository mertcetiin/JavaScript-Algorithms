function repeatStringNumTimes(str, num) {

    let accumulatedStr = '';

    for (let i = 0; i < num; i++) {
        accumulatedStr += str
    }
    return accumulatedStr;
}

alert(repeatStringNumTimes("abc", 3))
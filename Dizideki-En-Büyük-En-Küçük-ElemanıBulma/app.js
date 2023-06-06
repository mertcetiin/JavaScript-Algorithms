let arr = [2, 3, 4, 5, 6, 10]

let min = arr[0]
let max = arr[0]

for (i = 0; i <= arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i]
    } else if (min > arr[i]) {
        min = arr[i]
    }
    document.getElementById('dizi').innerHTML = 'Dizideki en küçük eleman ' + min + ', en büyük eleman ' + max;
}

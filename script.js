let arr = [];
let result;
const arrLength = prompt('Введите длинну массива');

for (let i = 0; i <= arrLength; i++) {
    const num =+ prompt('Введите число');
    arr[i] = num;
    result = arr.filter(value => value < 2 || value >= 5).sort();
}

console.log(result);

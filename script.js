let arr = [];
const arrLength = Number(prompt('Введите длинну массива'));

for (let i = 0; i <= arrLength; i++) {
    const num =+ prompt('Введите число');
    arr[i] = num;
}

arr.sort((a, b) => a - b);
console.log(arr);

(arrLength < 1) ? console.log('error') : arr.splice(1, 3); console.log(arr);

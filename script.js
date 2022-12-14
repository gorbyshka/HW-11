let arr = [];

for (let i = 0; i <= 6; i++) {
    const num =+ prompt('Введите число');
    arr[i] = num;
}

console.log(arr);
console.log(arr.sort());
console.log(arr.splice(4));
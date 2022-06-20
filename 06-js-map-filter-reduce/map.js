const numbers = [1, 2, 3, 4, 5, 6];

const objThis = {
    id: 1,
    value: 5
}

const aux = numbers.map((num) => num * 2);

const auxThis = numbers.map(function(num) {
    return num * this.value;
}, objThis);

console.log(numbers);
console.log(aux);
console.log(auxThis);

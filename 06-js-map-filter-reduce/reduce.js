//1
const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15, 20];
const sum = numbers.reduce((prev, curr) => prev + curr);

console.log('A1: ', sum);

//2
const list = [
    {
        id: 1,
        name: 'wine',
        price: 10
    },
    {
        id: 2,
        name: 'water',
        price: 5
    },
    {
        id: 3,
        name: 'beer',
        price: 8
    }
]

const balance = 200;
const newBalance = list.reduce((prev, curr) => {
    return prev - curr.price
}, balance);

console.log("Balance:", balance);
console.log("New Balance:", newBalance);

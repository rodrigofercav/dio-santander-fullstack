const numbers = [1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15, 20];

const aux = numbers.filter((num) => num % 2 === 0);

console.log('numbers:', numbers);
console.log('filter:', aux);

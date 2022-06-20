const MAIN_ARRAY = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniques(arr) {
    let mySet = new Set(arr);
    return [...mySet];
}

console.log(uniques(MAIN_ARRAY));
console.table(uniques(MAIN_ARRAY));

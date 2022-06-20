function validation(arr, num) {
    let strParams = "\nParâmetros: (Array, Number)";

    try {
        if (!arr && !num)
            throw new ReferenceError(`Favor enviar os parâmetros da função.${strParams}`);

        if (!Array.isArray(arr)) //if (typeof arr !== 'object')
            throw new TypeError(`O primeiro parâmetro da função deve ser um Array.${strParams}`);

        if (typeof num !== 'number')
            throw new TypeError(`O segundo parâmetro da função deve ser um Numérico.${strParams}`);

        if (arr.length !== num)
            throw new RangeError(`O tamanho do Array deve ser igual ao valor do parâmetro Numérico.${strParams}`);

        console.log("Passou com sucesso!");
    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log(error);
        } else if (error instanceof TypeError) {
            console.log(error);
        } else if (error instanceof RangeError) {
            console.log(error);
        } else {
            console.log(error);
        }
    }
}

let myArr = [2, 7, 233, 4, 46, 19];

validation(myArr, 6);
//validation(); //ReferenceError
//validation(1, 1); //TypeError
//validation([1], "1"); //TypeError
//validation([1,2], 3); //RangeError

//Correção DESAFIO 1
console.log("********** TypeScript - DESAFIO 1 **********\n");

// definição do objeto com tipagem inferência
console.log("\n#1 Tipagem por inferência:");

let employee = {
    code: 101,
    name: "Rodrigo"
}

console.log(`Code: ${employee.code} (${typeof employee.code})`);
console.log(`Name:" ${employee.name} (${typeof employee.name})`);

// definição do objeto com tipagem explicita
console.log("\n#2 Tipagem Explicita:");

let employee2: {code: number, name: string} = {
    code: 202,
    name: "Vinícius"
}

console.log(`Code: ${employee2.code} (${typeof employee2.code})`);
console.log(`Name:" ${employee2.name} (${typeof employee2.name})`);

console.log("\n\n"); // Espaço no console.

/* 
 --OUTRAS FORMAS SUGERIDAS PELO INSTRUTOR--

// Respostas 3 e 4
interface Funcionario {  // Já conhece interfaces? https://blog.logrocket.com/types-vs-interfaces-in-typescript/
    codigo: number,
    nome: string
};

const funcionarioObj = {} as Funcionario;
funcionarioObj.codigo = 10;
funcionarioObj.nome = 'João';

const funcionarioObj2: Funcionario = {
    codigo: 10,
    nome: 'João'
}

*/

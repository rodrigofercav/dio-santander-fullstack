//Correção DESAFIO 1
console.log("********** TypeScript - DESAFIO 2 **********\n");

//Definição do objeto com INTERFACE
console.log("\n#1 Definição do objeto com INTERFACE");

interface IPessoa {
    nome: string;
    idade: number;
    profissao: "Atriz" | "Padeiro" | "Programador";
}

console.log("\n- let pessoa1 = {} as IPessoa;");
let pessoa1 = {} as IPessoa;
pessoa1.nome = "Vinícius";
pessoa1.idade = 6;
pessoa1.profissao = "Programador";

console.log("Pessoa 1:", pessoa1);

console.log("\n- let pessoa2: IPessoa = {PREENCHE ATRIBUTOS AQUI}")
let pessoa2: IPessoa = {
    nome: "Rodrigo",
    idade: 37,
    profissao: "Padeiro"
}

console.log("Pessoa 2:", pessoa2);

//Definição do objeto com TYPE e ENUM
console.log("\n#2 Definição do objeto com TYPE e ENUM");

enum Profissao {
    //Valor número é atribuído implicitamente pela ordem declarada, começa com valor 0 (zero)
    /* Programador,
    Fisioterapeuta,
    Eletricista,
    Comerciante */

    //Valor número atribuído explicitamente
    Programador = 1000,
    Eletricista = 200,
    Fisioterapeuta = 1500,
    Comerciante = 2000
}

type Pessoa = {
    nome: string;
    idade: number;
    profissao: Profissao;
}

console.log("\n- let pessoa3: Pessoa = {PREENCHE ATRIBUTOS AQUI}")
let pessoa3: Pessoa = {
    nome: "Karina",
    idade: 43,
    profissao: Profissao.Fisioterapeuta
}

console.log("Pessoa3:", pessoa3);

console.log("\n- let pessoa4 = {} as Pessoa;")
let pessoa4 = {} as Pessoa;
pessoa4.nome = "Maria da Paz";
pessoa4.idade = 58;
pessoa4.profissao = Profissao.Comerciante;

console.log("Pessoa4:", pessoa4);

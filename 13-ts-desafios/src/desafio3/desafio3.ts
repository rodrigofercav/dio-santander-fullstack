//Correção Desafio 3 do Curso de TypeScript
let soma = document.getElementById('soma') as HTMLInputElement;
let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

function somarAoSaldo(valorOperacao: number):number {
    let saldoNumber: number = Number(campoSaldo.innerHTML.replace("R$",""));
    return saldoNumber + valorOperacao;
}

botaoAtualizar.addEventListener('click', function () {
    let valorOperacao: number = Number(soma.value);
    if (!valorOperacao) {
        alert("Deve-se informar algum valor para atualizar o saldo!\nExemplo:\n-100\n100.40\n200");
        return;
    }

    let saldoAtualizado: number = somarAoSaldo(valorOperacao);

    campoSaldo.style.color = corSaldo(saldoAtualizado);
    campoSaldo.innerHTML = ("R$" + saldoAtualizado.toFixed(2));
    
    soma.value = "";
});

function corSaldo(saldo: number): string {
    if (saldo === 0) return "black";
    if (saldo > 0) return "green";
    return "red";
}

botaoLimpar.addEventListener('click', async () => {
    campoSaldo.innerHTML = "R$0.00";
    campoSaldo.style.color = "black";
});

botaoLimpar.click();

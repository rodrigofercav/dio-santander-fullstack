class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero, "universitária");
    }

    sacar(valor) {
        if (valor > this._saldo)
            return `Saldo insuficiente, seu saldo atual é de R$${this._saldo}`;

        if (valor > 500)
            return `Sua Conta Universitária não permite saques maiores que R$500`;

        this._saldo -= valor;

        return `Seu saldo após o saque é de R$${this._saldo}`;
    }
}

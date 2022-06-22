class ContaBancaria {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        return this._saldo = valor;
    }

    sacar(valor) {
        if (valor > this._saldo)
            return `Saldo insuficiente, seu saldo atual é de R$${this._saldo}`;
        
        this._saldo -= valor;

        return `Seu saldo após o saque é de R$${this._saldo}`;
    }

    depositar(valor) {
        this._saldo += valor;

        return `Seu saldo após o depósito é de R$${this._saldo}`;
    }
}

import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    agencia;
    _cliente;
    _saldo = 0;

    constructor(agencia, cliente) {
        this.agencia = agencia;
        if (cliente instanceof Cliente) this._cliente = cliente;        
    }
    

    //getters e setters    
    //Métodos da classe, suas funcionalidades
    //Recupera o valor do saldo
    get saldo() {
        return this._saldo; //O atributo e o getter não podem ter o mesmo nome, nesse caso o atributo saldo é '_saldo' por ser privado
    }

    set cliente(novoCliente) {
        if (novoCliente instanceof Cliente) this._cliente = novoCliente;
    }

    get cliente() {
        return  this._cliente;
    }
    

    //Métodos
    //método de saque da conta, somente efetua caso 'valor > 0'
    sacar(valor) {
        if (this._saldo < valor || this._saldo == 0) return;
        this._saldo -= valor;
        return valor;
    }    

    //método de depósito da conta, somente efetua caso 'saldo > 0' 
    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;        
    }

    //Método para transferência entre conta, efetua o saque na conta1 e deposita na conta2
    transferir(valor, conta) {
        if (valor > this._saldo) return;
        const valorSacado = this.sacar(valor);        
        conta.depositar(valorSacado);
    }
}
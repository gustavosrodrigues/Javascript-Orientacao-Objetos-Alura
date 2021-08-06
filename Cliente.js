// Classe são moldes para a criação de objetos
export class Cliente {
    //Atributos ou propriedades da classe
    nome;
    _cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }
    

    get cpf() {
        return this._cpf;
    }
    
}


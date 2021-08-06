import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

// Facilita para criar o console.log, aceita n argumentos
function display(...conteudo) {
    console.log(conteudo);
}

/* // Inicialização de um novo objeto do tipo CLiente, atribuindo a uma variável
const cliente1 = new Cliente();
// Atribuindo valores aos atributos de cada instância de Cliente
// Selecione os atributos de cada objetos com o uso de '.'
cliente1.nome = "Gustavo";
cliente1.cpf = 12345678900;
 */

// Criando nova instâncida de Cliente usando o construtor de método
const cliente1 = new Cliente("Gustavo", 12345678900);
const cliente2 = new Cliente("Alice", 3256487900);

const conta1 = new ContaCorrente(1001, cliente1);
const conta2 = new ContaCorrente(102, cliente2);

//Execução principal
conta1.depositar(100);
conta2.depositar(300);

display(conta1, conta2);

conta2.transferir(200, conta1);
//conta1.saldo = 444; Impossível no momento, pois só existe o getter de saldo

display(conta1, conta2);

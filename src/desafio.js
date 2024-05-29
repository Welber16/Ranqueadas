// Variáveis para armazenar nome, vitoria e derrota do herói
//let nome;
let vitorias;
let derrotas;
const prompt = require("prompt-sync")();
// Validação de entrada para nome
do {
    nome = prompt("Digite o nome do seu herói: ");
} while (!nome || nome.trim() === "");

// Validação de entrada para vitórias
do {
    vitorias = parseInt(prompt("Digite a quantidade de vitórias do seu herói: "));
} while (isNaN(vitorias) || vitorias < 0);

// Validação de entrada para derrotas
do {
    derrotas = parseInt(prompt("Digite a quantidade de derrotas do seu herói: "));
} while (isNaN(derrotas));

// O saldo de Rankeadas
let saldoVitorias = vitorias - derrotas;

// Estrutura de decisão para determinar o nível do herói
let nivel;
if (saldoVitorias <= 10) {
    nivel = "Ferro";
} else if (saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

// Exibe a mensagem final
console.log(`O herói ${nome} tem o saldo de ${saldoVitorias} vitória(s) e está no nível ${nivel}`);

//1
const nome = "Carlos";
const idade = 25;
const cidade = "Curitiba";

console.log(`Olá, meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

//2
const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

console.log("Soma (10 + 5):", somar(10, 5));
console.log("Subtração (10 - 5):", subtrair(10, 5));
console.log("Multiplicação (10 * 5):", multiplicar(10, 5));
console.log("Divisão (10 / 5):", dividir(10, 5));

//3
function classificar(nota) {
    if (nota >= 7) {
        return "Aprovado";
    } else if (nota >= 5) {
        return "Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(`Nota 8.5: ${classificar(8.5)}`);
console.log(`Nota 5.5: ${classificar(5.5)}`);
console.log(`Nota 3.0: ${classificar(3.0)}`);

//4
function gerarTabuada(numero) {
    console.log(`--- Tabuada do ${numero} ---`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

gerarTabuada(7);

//5
let valor; 

if (valor) {
    console.log("Tem valor (Primeira tentativa)");
}

valor = 10; 

if (valor) {
    console.log("Tem valor (Segunda tentativa)");
}





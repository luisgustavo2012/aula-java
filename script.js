function iniciarJogo() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    let resultado = num1 + num2;
    alert("A Soma dos números é: " + resultado); // Corrigido o "=" errado
}

function numeroSecreto() {
    alert("Seja bem-vindo ao nosso jogo!");

    // Gera um número secreto aleatório entre 1 e 10
    let numeroSecreto = Math.floor(Math.random() * 10) + 1; // Corrigido para aleatório
    console.log(numeroSecreto); // Pode remover depois

    let chute;
    let tentativas = 0;

    while (chute !== numeroSecreto) {
        chute = parseInt(prompt("Escolha um número entre 1 e 10"));
        tentativas++;

        if (chute === numeroSecreto) {
            alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} na tentativa ${tentativas}.`);
        } else if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}. Tente novamente.`);
        } else {
            alert(`O número secreto é maior que ${chute}. Tente novamente.`);
        }
    }
}

function media() {
    alert("Seja bem-vindo ao nosso jogo!");

    let primeiroNumero = Number(prompt("Digite o primeiro número:"));
    let segundoNumero = Number(prompt("Digite o segundo número:"));
    let terceiroNumero = Number(prompt("Digite o terceiro número:"));
    let quartoNumero = Number(prompt("Digite o quarto número:"));

    let soma = primeiroNumero + segundoNumero + terceiroNumero + quartoNumero;
    let mediaTotal = soma / 4;

    alert(`A média é ${mediaTotal}.`); // Corrigido: agora com template string usando crase
}
// Questão 1
var indice = 13;
var soma = 0;
var k = 0;
while (k < indice) {
    k += 1;
    soma += k;
}
console.log(soma);
// O resultado é 91;
// Questão 2 : Verificar se um número pertence a sequencia de fibonacci
function verificaNumero(n) {
    var arrFibo = [0, 1];
    var numAnterior; // penultimo número da sequência
    var numAtual; // ultimo número da sequência
    var verifica = false;
    var msg = "";
    if (n < 0) {
        verifica = false;
    }
    else {
        do {
            numAnterior = arrFibo[arrFibo.length - 2];
            numAtual = arrFibo[arrFibo.length - 1];
            var novoNumFibo = numAnterior + numAtual;
            arrFibo.push(novoNumFibo);
            if (numAtual == n) {
                verifica = true;
                break;
            }
        } while (numAtual <= n);
    }
    msg = (verifica) ? "O n\u00FAmero ".concat(n, " pertence a sequ\u00EAncia de fibonacci") : "O n\u00FAmero ".concat(n, " n\u00E3o pertence a sequ\u00EAncia de fibonacci");
    return msg;
}
console.log(verificaNumero(190));
// Questão 3 - Descubra a lógica e complete o próximo elemento:
/*
a) 1, 3, 5, 7, (9) Está somando 2

b) 2, 4, 8, 16, 32, 64, (128) número x 2 = próximo número

c) 0, 1, 4, 9, 16, 25, 36, (49) Começa no índice 0. O valor representa o quadrado de seu índice

d) 4, 16, 36, 64, (100) Começa no índice 0 com o valor 4. A pártir do segundo número temos a segunte fórmula (número anterior + (12 + 8 * índice anterior) )

e) 1, 1, 2, 3, 5, 8, (13) Sequência de fibonacci

f) 2,10, 12, 16, 17, 18, 19,

*/
// Qestão 4
/* Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.
Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?*/
/*
Resposta :

vamos considerar o seguinte caso : Uma sala com três interruptores contrala lampadas de três salas distíntas.
vamos considerar interruptores A, B, C.
vamos considerar salas 1, 2, 3.

1° passo : ligar o interruptor A e ir para um sala qualquer (ex: sala 1);
    Se (Luz da sala 1 estiver ligada)
        volto para sala de controle e ligo o interruptor B;
        agora é só ir para outra sala qualquer(ex: sala 2) e julgar( se luz da sala 2 ligada o interruptor C é da sala 3, ou o contrário);

    Se (Luz da sala 1 estiver desligada)
        Primeiro: julgamento (Interruptor A é da sala 2 ou 3);
        Segundo: desligo o interrupot A e ligo o interruptor B;
        terceiro: vou para sala 2 e verifico:
            (Se luz da sala 2 ligada : interruptor B (sala 2), pela lógica, interruptor A (sala 3) e interruptor C (sala 1))
            (Se luz da sala 2 desligada: )



*/
// 5) Escreva um programa que inverta os caracteres de um string.
function invertString(texto) {
    var str = texto;
    var strInvestida;
    var arrIvestido = [];
    str.split("").forEach(function (el) {
        arrIvestido.unshift(el);
    });
    strInvestida = arrIvestido.join("");
    return strInvestida;
}
console.log(invertString("Gustavo"));

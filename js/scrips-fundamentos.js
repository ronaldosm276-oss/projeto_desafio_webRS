// This is a comment, this a test just to see it works

/*this is a comment
that works
on multiple
lines, just so
I can see it with multiple lines, for some reason

*/

//COMANDO DE SAÍDA
console.log("Hello World")

//DECLARAÇÂO DE VARIÁVEL
//O programa para no erro

let num = 10
var num2 = 99
const num3 = 250

console.log(num)
console.log(num2)
console.log(num3)

if (true) {

    let num4 = 999
    console.log(num4)

    var num5 = 140
}

console.log(num5)

//let - tem restrição de bloco, var não tem essa restrição funciona fora do bloco

num = 9001

console.log(num)

num2 = 1337

console.log(num2)


console.log(num3)

/*  

    let = bloco que era foi contruida

    var = funciona dentro ou fora do bloco, tanto faz

    const = é constante, é uma variavel que não muda

*/
//const não pode ser alterada, não pode ser alterada
// ALT + SHIFT + DOWN ARROW
// ALT + SHIFT + DOWN ARROW
// ALT + SHIFT + DOWN ARROW
// para copiar a linha selecionada

//CONCATENAÇÃO


console.log('Valor da variável num 3 é ' + num3)
console.log("Valor da variável num 3 é " + num3)
console.log('Valor da variável num 3 é ', num3)
console.log("Valor da variável num 3 é", num3)
console.log(`Valor da variável num 3 é ${num3}`)

//OPERADORES MATEMÁTICOS
/*
+ SOMA
- SUBTRAÇÃO
* MULTIPLICAÇÃO
/ DIVISÃO
% MÓDULO - RESTO DA DIVISÃO
*/
// se lembre que estamos usando ---> ` <--- na QUINTA


console.log('A soma dos números é: ', 30 + 12)

console.log('A subtração entre as variaveis: ', num2 - num3)

console.log('A  multiplicação entre o num2 e valor: ', num2 * 12)

console.log('A divisão entre os valores: ', num3 / num2)

console.log(`O resto da divisão entre 15 e 2 é: ${15 % 2}`)

//OPERADORES RELACIONAIS
/*
> MAIOR
< MENOR
>= MAIOR IGUAL
<= MENOR IGUAL
!= DIFERENTE
*/

//OPERADORES LÓGICOS
/*
 && E
 || OU
*/
//TESTE LÓGICO 


let idade = 18

if (idade >= 18) {
    console.log("MAIOR DE IDADE")

}
 else {
    console.log("MENOR DE IDADE")
}

idade = 12

idade >= 18 ? console.log("MAIOR DE IDADE") : console.log("MENOR DE IDADE")


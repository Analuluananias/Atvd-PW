let nota1 = 8;
let nota2 = 6;
let nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

console.log("Média: " + media.toFixed(2));

if (media >= 7) {
    console.log("Aluno aprovado com média " + media.toFixed(2));
} else {
    console.log("Aluno reprovado com média " + media.toFixed(2));
}

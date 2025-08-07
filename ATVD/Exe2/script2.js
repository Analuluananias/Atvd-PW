// Função chamada quando o botão é clicado
function verificarParOuImpar() {

  // Pega o valor digitado 
  let numero = document.getElementById("numero").value;

  // Verifica se o campo está vazio
  if (numero === "") {
    // Se estiver vazio, exibe uma mensagem pedindo para digitar um número
    document.getElementById("resultado").innerText = "Por favor, digite um número.";
    return; 
  }

  // Verifica se o número é par
  if (numero % 2 === 0) {
    //É par
    document.getElementById("resultado").innerText = "O número " + numero + " é PAR.";
  } else {
    //É ímpar
    document.getElementById("resultado").innerText = "O número " + numero + " é ÍMPAR.";
  }
}

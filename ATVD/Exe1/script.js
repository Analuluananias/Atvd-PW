// Função que será chamada quando o botão for clicado
function calcularIdade() {
  // Pega o valor digitado no input e transforma em número
  let anoNascimento = document.getElementById("anoNascimento").value;

  // Pega o ano atual automaticamente do sistema
  let anoAtual = new Date().getFullYear();

  // Calcula a idade 
  let idade = anoAtual - anoNascimento;

  // Mostra o resultado 
  document.getElementById("resultado").innerText = "Você tem " + idade + " anos.";
}

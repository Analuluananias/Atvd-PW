function calcular(operacao) {
  // Pega os valores digitados nos inputs
  var numero1 = parseFloat(document.getElementById("num1").value);
  var numero2 = parseFloat(document.getElementById("num2").value);
  var resultado = 0;

  // Verifica qual operação foi escolhida
  if (operacao === 'soma') {
    resultado = numero1 + numero2;
  } else if (operacao === 'subtrair') {
    resultado = numero1 - numero2;
  } else if (operacao === 'multiplicar') {
    resultado = numero1 * numero2;
  } else if (operacao === 'dividir') {
    if (numero2 !== 0) {
      resultado = numero1 / numero2;
    } else {
      resultado = "Erro: divisão por zero";
    }
  }

  // Mostra o resultado na página
  document.getElementById("resultado").innerText = "O Resultado é " + resultado;
}

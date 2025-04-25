let expressao = '';

function adicionarNumero(numero) {
  expressao += numero;
  atualizarResultado();
}

function operacao(operador) {
  expressao += operador;
  atualizarResultado();
}

function atualizarResultado() {
  document.getElementById('resultado').value = expressao;
}

function calcular() {
  try {
    const resultado = eval(expressao); // Avalia a expressão
    expressao = resultado.toString();
    atualizarResultado();
  } catch (error) {
    expressao = 'Erro';
    atualizarResultado();
  }
}


let result = 0;

function Calculadora(n1,n2,op) {

  switch (op) {
      case "+":
        result = n1 + n2;
      break;
      case "-":
        result = n1 - n2;
      break;
      case "*":
        result = n1 * n2;
      break;
      case "/":
        result = n1 / n2;
      break;
      case "e":
      for(let i = 0; i < n2; i++){
        result += n1;
      }
      break;
    default:
      break;
  }

  return result ;

}

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/).map(Number)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}
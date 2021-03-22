//3) Faça um programa que entre com cinco números e imprima o quadrado de cada número (Looping).

function calculoQuadrado() {
    let quadrado;
    for (let i = 1; i <= 5; i++) {
      let n = prompt("Digite o " + i + "º número:");
      let quadrado = Math.pow(n, 2);
      console.log(quadrado);
    }  
    return quadrado;
  }  
  calculoQuadrado();
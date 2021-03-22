//4) Peça ao usuário para digitar 5 números em uma caixa de texto, separados por vírgula, Verifique qual é o maior número e exiba-o.

function maiorNumero(n_string) {
    let numeros = n_string.split(",");
    let maiorN = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (Number(numeros[i]) > maiorN) {
        maiorN = Number(numeros[i]);
      }
    }  
    return maiorN;
  }
  let numeros = prompt("Digite 5 números separadas por vírgula:", 0);
  console.log(maiorNumero(numeros));
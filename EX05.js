//5) Peça ao usuário para digitar várias idades separadas por vírgula em um input e exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.

function idadeMaioreidadeMenor(idade_string){
    let idades = idade_string.split(",");
    let countMaior = 0;
    let countMenor = 0;

    for(let i = 0; i < idades.length; i++){
      if(Number(idades[i]) >= 18){
        countMaior++;
      } else {
            countMenor++;
      }
    }
    console.log("O n° de Idades maiores que 18 anos é: " + countMaior);
    console.log("O n° de Idades menores que 18 anos é: " + countMenor);
}
let idade = prompt("Digite diferentes idades separadas por vírgula");
idadeMaioreidadeMenor(idade);
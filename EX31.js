/*31) Crie uma função para validar um CPF. A função deverá receber um número como
input e retornar se este número é um CPF válido. Para este número ser considerado
válido ele deve ter 11 dígitos e a soma dos seus dígitos não poderá ser maior que
80.*/

function validacao() {
    var num = prompt("Digite um numero de CPF: ");
    let soma = 0;

    for (somatorio in num){
        soma += Number(somatorio);   
        console.log(soma); 
    }
    
    if (num.length > 10  && soma <= 80){
        console.log("O numero é válido!");
    }
    else{
        console.log("O numero não é válido!");
    }
}

validacao();
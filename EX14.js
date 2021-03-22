//14) Escreva uma condição IF para checar se o valor de um produto está entre 100 e 200 reais de forma inclusiva

function valorProduto(){
    let valor = prompt("Digite o valor do produto: ");
    if (valor >= 100 && valor <= 200){
        alert("O valor está entre 100 e 200");
    }
    else if (valor < 100){
        alert("O valor é menor que 100");
    }
    else{
        alert("O valor é maior que 200");
    }
}

valorProduto();
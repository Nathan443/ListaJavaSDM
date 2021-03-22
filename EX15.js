/*15) Escreva um if para checar se o valor de um produto NÃO está entre 100 e 200 de
forma inclusiva. Faça duas maneiras para isto, uma usando o NOT (!) e outra sem
utilizá-lo.*/

function valorProduto(){
    let valor = prompt("Digite o valor do produto: ");
    if (!(valor >= 100 && valor <= 200)){
        alert("O valor não está entre 100 e 200");
    }

    if (valor < 100 || valor > 200){
        alert("O valor não está entre 100 e 200");
    }
}

valorProduto();
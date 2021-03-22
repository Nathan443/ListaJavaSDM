//17) Crie um array com dois itens: “Rock” e “Pagode”
function Itens() {
    let array = ["Rock", "Pagode"];
    alert(array);

    /*18) Adicione “Funk” no final deste array.*/
    array.push("Funk");
    alert(array);
    
    /*19) Substitua o valor do meio por “Axé”. Seu código para encontrar o valor do meio deve
    funcionar para qualquer array de tamanho par, faça a verificação com um IF.*/    
    if (array.length % 2 != 0){
            array[1] = "Axé";        
    }    
    alert(array);

    /*20) Remova o primeiro valor do array e exiba ele no console.*/
    array.shift();
    alert(array);
    
    /*21) Adicione “Rap” e “Reggae” no começo deste array.*/
    array.unshift("Rap", "Reggae");
    alert(array);
    
    /*22) Escreva uma função somarValores(). Peça o usuário para digitar um valor no Prompt
    armazenando este valor em um array. Faça isso enquanto o usuário entrar com um
    valor não numérico ou apertar “Esc” ou “Cancelar”.*/
    function somarValores(array) {
       let valor = "";
       var num = !isNaN(parseFloat(num)) && isFinite(num);;
        while (num){
            let valor = prompt("Digite um valor");
            array.unshift(valor);        
        }        
    }    
    somarValores(array);
    alert(array);

    /*Calcule e retorne a soma dos valores deste array de itens.*/
    let calc = array.length;
    alert(calc);
}

Itens();
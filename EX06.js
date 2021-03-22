//6) Peça ao usuário para digitar vários nomes. Exiba na tela todos os nomes digitados, porém de maneira invertida (do último para oprimeiro).

function NomeInvertido(nome){
    let ListaNomes = [];
   for (let i = 0; i < 4; i++) {
       let nome = prompt("Digite nomes:");
       ListaNomes.push(nome);
   }
   console.log("Lista de nomes: " + ListaNomes);
  console.log("Lista de nomes invertida: " + ListaNomes.reverse());
}
NomeInvertido();
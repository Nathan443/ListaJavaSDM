/*32) Escreva uma função calcularIdadeDoCachorro que deverá:*/
// a) Receber dois argumentos:

function calcularIdadeDoCachorro() {
    // i) idade real do cachorro
    let idadeReal = prompt("Digite a idadade Real: ");

    /*ii) uma função que irá exibir a categoria etária do Cachorro e que recebe
    como parâmetro a idade real do cachorro e retorna “Criança” caso ele
    seja menor que 14, “Adolescente” caso seja entre 14 e 28 e “Adulto”
    caso seja maior que 28*/
    function categoria(idadeReal) {
        if (idadeReal < 14){
            console.log("Criança com " + idadeReal + " anos");
        }
        else if (idadeReal <= 14 && idadeReal >= 28){
            console.log("Adolescente com " + idadeReal + " anos");
        }
        else{
            console.log("Adulto com " + idadeReal + " anos")
        }
    }

    // b) Calcule a idade do cachorro baseada na taxa de conversão 1 ano humano = 7 anos de cachorro.    
    resultado = Number(idadeReal) * 7
    
    // c) Use a idade do cachorro para chamar a função recebida como parâmetro e exiba no console a idade do cachorro e a categoria etária dele.*/
    categoria(resultado)    
}

calcularIdadeDoCachorro();
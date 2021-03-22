function Questão1() {
    let i = 0;
    let notas = [3];

    for (i = 0; i < 4; i++){
        console.prompt("Digite o valor da " + i + "ª nota: ");
        let valor;
        return [valor];
    }
    
    let media = notas[i]
        
    let n1 = 7.3;
    let n2 = 4.4;
    let n3 = 8.1;
    let n4 = 12;
    
    let mediaNotas = n1 + n2 + n3 + n4 / 4;
    
    return [mediaNotas];
}
console.log(Questão1())


// Questão 2

function calcularmedia(notas_string) {
    //console.log(notas_string)
    let notas = notas_string.split(".");
    //console.log(notas);
    return true
    let soma=0;
    for (let i=0;i<notas.length;i++){
        soma = soma + Number(notas[i]);
    }
let media = soma/notas.length;
return media;

}
let notas = prompt("Digite as notas separadas por vírgula:",0)
console.log(calcularmedia(notas));

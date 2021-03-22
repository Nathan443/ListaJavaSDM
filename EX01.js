// 1) Crie um array de notas e calcule a média de todas essas notas e exiba no console.

function calculoMedia(n1) {
    let soma=0;
    for (let i=0;i<n1.length;i++) {
        soma = soma + n1[i];
    }
    let media = soma/n1.length;    
    return media;
}

let n1 = [3,2,7,1,9];
let n2 = [12,18,14,9];

console.log(calculoMedia(n1));
console.log(calculoMedia(n2));
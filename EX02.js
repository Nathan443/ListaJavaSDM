// 2) Solicite o usuário a inserção de notas via prompt e calcule a média de diversas notas digitadas em um input, separados por vírgula, pelo usuário

function calculoMedia(n_string) {
    let n = n_string.split(",");
    let soma = 0;
    for (let i = 0;i < n.length; i++) {
        soma = soma + Number(n[i]);
    }
    let media = soma/n.length;
    return media;
}

let n = prompt("Digite notas separadas por vírgula",0);
console.log(calculoMedia(n));
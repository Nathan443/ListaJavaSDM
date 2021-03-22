/*16) Escreva um bloco de código que irá perguntar através do prompt a identificação do visitante:
a) Se o visitante digitar “Admin” abra um prompt perguntando a senha. Se o input for vazio ou apertar Esc exiba um 
alerta com “Cancelado”, se for uma outra string exiba um alerta com a mensagem “Não conheço você”. */
function identificação(){
    let id = prompt("Digite seu usuário: ");
      
        if (id == "Admin"){
            let senha = prompt("Digite sua senha: ");
            
            //b) A senha deverá ser checada da seguinte maneira:
            //i) Se for igual a “UniBH” - exiba um alerta “Bem vindo”,
            if (senha == "UniBH"){
                alert("Bem vindo!");
            }
            
            //iii) Se for vazio ou cancelado - exiba “Cancelado”.
            else if (senha == ""){
                alert("Cancelado!");
            }
            
            //ii) Se for uma outra string - exiba um alerta “Senha incorreta!”)
            else{
                alert("Senha incorreta!");
            }
        }
        else if (id == ""){
            alert("Cancelado!");
        }
        else{
            alert("Não conheço você!");
        }
    }
    
identificação();
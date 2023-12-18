/*window.alert("Hello bitches!");
window.confirm("Funcionou?");
window.prompt("Qual o seu nome?");*/

function logar(){
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(login == "admin@gmail.com" && senha == "admin"){
        alert("Sucesso!"); // mostra um alerta
        location.href = "home.html"; //encaminha para a pag home
    }else{
        alert("Usuário ou senha incorretos!");
    }

}

function cadastrar(){
    var login = document.getElementById("login").value;
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

}
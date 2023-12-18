/*window.alert("Hello bitches!");
window.confirm("Funcionou?");
window.prompt("Qual o seu nome?");*/

import { db, collection, addDoc, onSnapshot } from "./firebase.js";

window.onload = () => {

    const formCadastro = document.getElementById("formC");
    const formLogin = document.getElementById("formL");

    formCadastro.onsubmit = async (event) => {
        event.preventDefault();

        let dados = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("login").value,
            senha: document.getElementById("senha").value
        }

        try {

            await addDoc(collection(db, "videocall"), {
              nome: dados.nome,
              email: dados.email,
              senha: dados.senha,
            });
      
            alert("Usuário cadastrado com sucesso!");
            location.href = "index.html";
          } catch (error) {
            console.error("Error adding document: ", error);
          }
    }

    formLogin.onsubmit = async (event) => {
        event.preventDefault();

        let input = {
            email: document.getElementById("login").value,
            senha: document.getElementById("senha").value
        }

        onSnapshot(collection(db, "videocall"), (snapshot) => {
            const items = snapshot.docs.data();

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.email == input.email && item.senha == input.senha) {
                    alert("Sucesso!");
                    location.href = "home.html";
                } else {
                    alert("Usuário ou senha incorretos!");
                }
            }
        });

        
    }
};
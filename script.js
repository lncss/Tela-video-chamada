import { db, collection, addDoc, getDocs, onSnapshot } from "./firebase.js";

const formCadastro = document.getElementById("formC");
const formLogin = document.getElementById("formL");

if (formCadastro != null) {
  formCadastro.onsubmit = async (event) => {
    event.preventDefault();

    let dados = {
      nome: document.getElementById("nome").value,
      email: document.getElementById("login").value,
      senha: document.getElementById("senha").value,
    };

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
  };
}

if (formLogin != null) {
  formLogin.onsubmit = async (event) => {
    event.preventDefault();

    let items = [];
    let login = false;

    let input = {
      email: document.getElementById("login1").value,
      senha: document.getElementById("senha1").value,
    };

    const querySnapshot = await getDocs(collection(db, "videocall"));

      querySnapshot.forEach((doc) => {
        items.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      for(let i = 0; i < items.length; i++){
        if(items[i].email === input.email && items[i].senha === input.senha){
          login = true;
          location.href = "home.html";
          break;
        } else {
            login = false;
        }
      }

        if(login === true){
            alert("Usuário logado com sucesso!");
        } else {
            alert("Usuário ou senha inválidos!");
        }
  };
}

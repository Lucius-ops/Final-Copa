
// Mensagem ao carregar a página
window.onload = function () {
    alert("Bem-vindo ao Portal Oficial da Seleção da Itália! 🇮🇹");
};


// Tema Claro/Escuro
function tema() {
    document.body.classList.toggle("dark");
}


// Página Inicial
const titulo = document.getElementById("titulo");

if (titulo) {

    titulo.ondblclick = function () {
        alert("Forza Azzurri! 🇮🇹");
    };

}

const imagem = document.getElementById("italia");

if (imagem) {

    imagem.onmouseover = function () {
        imagem.style.transform = "scale(1.08)";
    };

    imagem.onmouseout = function () {
        imagem.style.transform = "scale(1)";
    };

}


// Página Classificação
const classificados = document.querySelectorAll(".classificado");

classificados.forEach(function(time){

    time.onmouseover = function(){

        this.style.color = "green";
        this.style.fontWeight = "bold";

    }

    time.onmouseout = function(){

        this.style.color = "";
        this.style.fontWeight = "";

    }

});

const eliminado = document.querySelector(".eliminado");

if(eliminado){

    eliminado.onmouseover = function(){

        this.style.color = "red";
        this.style.textDecoration = "line-through";

    }

    eliminado.onmouseout = function(){

        this.style.color = "";
        this.style.textDecoration = "";

    }

}


// Cadastro
const formulario = document.getElementById("formulario");

if(formulario){

    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const data = document.getElementById("data");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");
    const jogador = document.getElementById("jogador");

    nome.onfocus = function(){
        this.style.background = "#ffffcc";
    }

    nome.onblur = function(){
        this.style.background = "white";
    }

    email.onkeyup = function(){
        email.style.borderColor = "green";
    }

    jogador.onchange = function(){
        alert("Jogador escolhido: " + jogador.value);
    }

    formulario.onsubmit = function(e){

        e.preventDefault();

        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("data", data.value);
        localStorage.setItem("cidade", cidade.value);
        localStorage.setItem("estado", estado.value);
        localStorage.setItem("jogador", jogador.value);

        window.location.href = "resultado.html";

    };

}


// Resultado
if(document.getElementById("rNome")){

    document.getElementById("rNome").innerHTML = localStorage.getItem("nome");
    document.getElementById("rEmail").innerHTML = localStorage.getItem("email");
    document.getElementById("rData").innerHTML = localStorage.getItem("data");
    document.getElementById("rCidade").innerHTML = localStorage.getItem("cidade");
    document.getElementById("rEstado").innerHTML = localStorage.getItem("estado");
    document.getElementById("rJogador").innerHTML = localStorage.getItem("jogador");

    const nascimento = new Date(localStorage.getItem("data"));
    const hoje = new Date();

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();

    if(mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())){
        idade--;
    }

    document.getElementById("idade").innerHTML = idade;

    let categoria = "";

    if(idade <= 16){

        categoria = "Torcedor Mirim";

    }else if(idade <= 30){

        categoria = "Torcedor Novato";

    }else{

        categoria = "Torcedor Experiente";

    }

    document.getElementById("categoria").innerHTML = categoria;

}
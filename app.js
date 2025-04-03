function fnSaudacao() {
    let nomeCompleto = ("")
    nomeCompleto = prompt("informe seu nome completo:")
    alert("Seja bem vindo(a)    " + nomeCompleto + " ao meu site!")
}

function fnTrocarDeCorFundo() {
    let cor = prompt("Informe uma cor: \n 1-azul \n 2-Vermelho \n 3-preto \n 4-Verde \n 5-Rosa \n 6-Laranja")
    let corDeFundo = null

    if (cor == "1") {
        corDeFundo = "blue"
    }
    else if (cor == "2") {
        corDeFundo = "red"
    }
    else if (cor == "3") {
        corDeFundo = "black"
    }
    else if (cor == "4") {
        corDeFundo = "green"
    }
    else if (cor == "5") {
        corDeFundo = "pink"
    }
    else if (cor == "6") {
        corDeFundo = "orange"
    }
    else {
        corDeFundo = "yellow"
    }
    document.body.style.backgroundColor = corDeFundo
}

function fnMostrarHoraAtual() {
    const agora = new Date();
    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    alert(`Hora atual: ${horas}:${minutos}:${segundos}`);
}

function fnTrocarTitulo(){
    document.getElementById("nome-empresa").innerText=prompt("Digite seu novo titulo: ")
}

function fnIdiomaPtBr(){
    document.getElementById("menu1").innerText="Inicio"
    document.getElementById("menu2").innerText="Serviços"
    document.getElementById("menu3").innerText="Contato"
}

function fnIdiomaIngles(){
    document.getElementById("menu1").innerText="Home"
    document.getElementById("menu2").innerText="Services"
    document.getElementById("menu3").innerText="Contact"
}

function fnIdiomaFrances(){
    document.getElementById("menu1").innerText="Accueil"
    document.getElementById("menu2").innerText="Services"
    document.getElementById("menu3").innerText="Contact"
}

function fnIdiomaItaliano(){
    document.getElementById("menu1").innerText="Casa"
    document.getElementById("menu2").innerText="Servizi"
    document.getElementById("menu3").innerText="Contatto"
}

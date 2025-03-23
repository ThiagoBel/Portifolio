let age = document.getElementById('ageInfo');
let time = document.getElementById('timeInPro');

let dataInicial = new Date("2023-11-10"); //um dia a mais
let dataNascimento = new Date("2010-11-09"); //um dia a mais tbm

function atualizarInformacoes() {
    let dataAtual = new Date();
    let diferencaMs = dataAtual - dataInicial;
    let dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
    time.innerHTML = dias + " Dias";

    let diferencaIdadeMs = dataAtual - dataNascimento;
    let idade = Math.floor(diferencaIdadeMs / (1000 * 60 * 60 * 24 * 365.25));
    age.innerHTML = idade + " Anos";

    if (dataAtual.getDate() === dataNascimento.getDate() && dataAtual.getMonth() === dataNascimento.getMonth()) {
        age.style.color = "Red";
        age.title = "Meu aniversário é hoje🥳";
    } else {
        age.style.color = "";
        age.title = "";
    }
}

setInterval(atualizarInformacoes, 100);
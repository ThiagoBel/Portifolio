const age = document.getElementById('ageInfo');
const time = document.getElementById('timeInPro');

const dataInicial = new Date("2023-11-09");
const dataAtual = new Date();
const diferencaMs = dataAtual - dataInicial;
const dias = Math.floor(diferencaMs / (1000 * 60 * 60 * 24));
time.innerHTML = dias + " Dias";

const dataNascimento = new Date("2010-11-09");
const diferencaIdadeMs = dataAtual - dataNascimento;
const idade = Math.floor(diferencaIdadeMs / (1000 * 60 * 60 * 24 * 365.25));
age.innerHTML = idade + " Anos";

if (dataAtual.getDate() === dataNascimento.getDate() && dataAtual.getMonth() === dataNascimento.getMonth()) {
    age.style.color = "Red";
    age.title = "Meu aniversario é hoje🥳";
}
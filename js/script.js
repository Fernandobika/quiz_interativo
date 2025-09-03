import {aleatorio} from './aleatorio.js';
import {pergunta} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector (".caixa-resultado");
const botaoIniciar = document.querySelector (".iniciar-bt");
const telaInicial = document.querySelector (".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click' , iniciarJogo);

function iniciarJogo() {
    atual= 0;
    telaInicial.computedStyleMap.display = 'none';
    caixaPergunta.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPegunta();
}

function mostraPegunta(){
if (atual >= pergunta.length){
    mostraResultado();
};

perguntaAtual = pergunta[atual];
caixaPergunta.textContent = perguntaAtual.enunciado
caixaAlternativas.textContent = "";
mostraAlternativa();
}

function mostraAlternativa() {}

function mostraResultado() {
    caixaPerguntas.textContent = 'apos tudo isso, ${none} descobriu que';
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}
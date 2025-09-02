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

botaoIniciar.addEventListener('click' , iniciarJogo);

function iniciarJogo() {
    atual= 0;
    telaInicial.computedStyleMap.display = 'none';
    caixaPergunta.classList.remove(".mostrar");
    caixaAlternativas.classList.remove(".mostrar");
    caixaResultado.classList.remove(".mostrar");
    mostraPegunta();
}

function mostraPegunta(){};
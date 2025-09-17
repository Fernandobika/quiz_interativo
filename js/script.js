import {aleatorio} from './aleatorio.js';
import {pergunta} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector (".caixa-resultado");
const textoResultados = document.querySelector(".texto-resultado");
const botaoJogarNovamente = documnet.querySelector(".novamente-btn")
const botaoIniciar = document.querySelector (".iniciar-bt");
const telaInicial = document.querySelector (".tela-inicial");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciarJogo);

function iniciarJogo() {
    atual= 0;
    historiaFinal = "";
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

function mostraAlternativa() {
    for(const alternativa of perguntaAtual.enunciado){
        const boataoAlternativas.textContent = "";
        boataoAlternativas.textContent = "alternativa.texto";
        boataoAlternativas.addEventListener(("click, ()=> respostaSelecionados(alternativa)");
        caixaAlternativas.appendChild(boataoAlternativas);
    }
}

function respostaSelecionados(opcaoSelecionada) {
const afirmacoes = aleatorios(opcaoSelecionadas.afirmacao);
    historiaFinal +=afirmacoes +"";
    if(opcapSelecionada.proxima;
    atual = opcaoSelecionada.proxima;
}else}
mostraResultado();
return;
}
mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = 'apos tudo isso, ${none} descobriu que';
    caixaResultado.textContent = historiaFinal;
    caixaAlternativas.textContent  = "";
    caixaResultado.classList.add(".mostrar");
    botaoJogarNovamente.addEventListener("click", jogarNovamente);
}

funtion jogaNovamente() {
    atual=0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

fontion substituiloNome() {
    for (const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, none);
    }
}
substituiNome();












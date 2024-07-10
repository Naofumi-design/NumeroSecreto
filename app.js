//Variaveis
let listaDoSorteio = []
let limiteDeNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//Funcao de exibir Textos
function exibirTextoNaTela(tag, texto){
    let textos = document.querySelector(tag)
    textos.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.2});
}

//Mensagem Inicial
function mensagemInicial(){
    exibirTextoNaTela("h1", "Jogo Da Sorte" )
    exibirTextoNaTela("p", "Escolha um número entre 1 e 10")

}
mensagemInicial();


//Funcao Dos Chutes
function verificarChute(){
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");

        document.getElementById("reiniciar").removeAttribute("disabled");

        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela("p", mensagemTentativas);

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "Um pouco menos");
        } else {
            exibirTextoNaTela("p", "Um pouco mais");
        }
        tentativas++;
        limparCampo();
    }
}


//Funcao Numero Aleatorio
function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementos = listaDoSorteio.length;

    if (quantidadeDeElementos == limiteDeNumeros){
        listaDoSorteio = [];
    }

    if (listaDoSorteio.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDoSorteio.push(numeroEscolhido);
        console.log(listaDoSorteio);
        return numeroEscolhido;
    }
}


//Limpador De Campo
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}


//Funcao de Reiniciar
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemInicial();
    tentativas = 1;
    document.getElementById("reiniciar").setAttribute("disabled", true);
}


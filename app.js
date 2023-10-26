var listaDeNumerosSorteados = [];
var numeroLimite = 100;
var numeroSecreto = gerarNumeroAleatorio();
var tentivas = 1;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
     campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo Do Número Secreto 2.0");
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100");
}

function verificarChute(){
    var chute = document.querySelector("input").value; 
    
    if (parseInt(chute) == numeroSecreto){
        exibirTextoNaTela("h1", "ACERTOU!")
        let palavraTentativa = tentivas > 1? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto com ${tentivas} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled"); 
    } else{
        if (parseInt(chute) > numeroSecreto) {
            exibirTextoNaTela("p", "O número secreto é menor");
        } else{
                exibirTextoNaTela("p", "O número secreto é maior");
            }
            tentivas++;
            limparCampo();
        }
    }

function gerarNumeroAleatorio(){
    var numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    var quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
 numeroSecreto = gerarNumeroAleatorio();
 limparCampo();
 tentivas = 1;
 exibirMensagemInicial();
 document.getElementById("reiniciar").setAttribute("disabled", true);
}
var intervaloJogador = 200;
var intervaloInimigos = 400;
var tempoJogador = null;
var tempoInimigos = null;

var canvas = document.getElementById("tela");
var ctx = canvas.getContext("2d");

Bomba.som = document.getElementById("sndBomba");

function reiniciar() {
  if (tempoJogador != null) {
    pausar();
  }
  intervaloJogador = 200;
  intervaloInimigos = intervaloJogador * 2;
  Mapa.carregar(canvas);
  desenharTudo();
  document.getElementById("btnIniciar").disabled = false;
  document.getElementById("btnIniciar").innerHTML = "Iniciar";
  intervaloJogador = 200;
  intervaloInimigos = intervaloJogador * 2;
  Bomba.todas.length = 0;
  Bomba.maxBombas = 1;
}

function desenharTudo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Mapa.desenhar(ctx);
  Bomba.desenharTodas(ctx);
  Jogador.desenhar(ctx);
  Inimigo.desenharTodos(ctx);
}
reiniciar();

document.onkeydown = function (evt) {
  document.getElementById("tecla").innerHTML =
  evt.keyCode;
}

document.onkeydown = function (evt) {
  Jogador.tratarTecla(evt);
}

function pausar() {
  if (tempoJogador == null) {
    tempoJogador = setInterval("atualizaJogador()",
    intervaloJogador);
    tempoInimigos = setInterval("atualizaInimigos()",
    intervaloInimigos);
    document.getElementById("btnIniciar").innerHTML = "Pausar";
   } else {
    clearInterval(tempoJogador);
    tempoJogador = null;
    clearInterval(tempoInimigos);
    tempoInimigos = null;
    document.getElementById("btnIniciar").innerHTML =
    "Continuar";
  }
}

function atualizaJogador() {
  Jogador.mover();
  Bomba.executarTodosCiclos();
  desenharTudo();
  if (Jogador.verificaMorte()) {
    gameOver();
  }
}

function atualizaInimigos() {
  Inimigo.moverTodos();
  desenharTudo();
  if (Jogador.verificaMorte()) {
    gameOver();
  }
}

function gameOver() {
  if (tempoJogador != null) {
    pausar();
  }
  document.getElementById("btnIniciar").disabled = true;
}

/* this.executarCiclo = function () {
  this.cicloAtual++;
  if (this.cicloAtual > this.ciclos) {
    if (this.cicloAtual == this.ciclos + 1 && Bomba.som !=
    null) {
      //Bomba.som.currentTime = 0;
      //Bomba.som.play();
    }
    //this.explodir();
  }
}; */



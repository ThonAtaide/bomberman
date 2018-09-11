function Jogador() {
}

Jogador.x = -1;
Jogador.y = -1;

Jogador.desenhar = function (ctx) {
	ctx.fillStyle = "#00BBBB";
	ctx.fillRect(Jogador.x * Mapa.largura + 2, Jogador.y *
		Mapa.largura + 2, Mapa.largura - 4, Mapa.largura - 4);
};
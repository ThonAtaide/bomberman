function Inimigo(x, y, imagem) {
	this.x = x;
	this.y = y;
	this.imagem = imagem;
	
	this.desenhar = function (ctx) {
		ctx.drawImage(this.imagem, this.x * Mapa.largura,
			this.y * Mapa.largura, Mapa.largura, Mapa.largura);
	};
}

Inimigo.todos = new Array();

Inimigo.desenharTodos = function (ctx) {
	var i;
	for (i = 0; i < Inimigo.todos.length; i++) {
		Inimigo.todos[i].desenhar(ctx);
	}
};
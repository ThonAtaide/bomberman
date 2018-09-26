function Mapa(){
}
//Compreensão do conteúdo do mapa 
Mapa.LIVRE = 0;
Mapa.PAREDE = 1;
Mapa.JOGADOR = 2;
Mapa.TIJOLO = 3;
Mapa.INIMIGO = 4;
Mapa.BOMBA = 5;
Mapa.ITEMBOMBA = 6;

//linhas e colunas existentes no mapa atualmente

Mapa.colunas = 0;
Mapa.linhas = 0;

//Largura e altura de cada linha/coluna em pixels 
Mapa.largura = 40;

Mapa.atual = null;

Mapa.carregar = function (canvas) { 
    Mapa.atual = new Array(); 
    var y, x; 

    if(vitorias === 0){
        for (y = 0; y < mapaMascara0.length; y++) { 
            Mapa.atual.push(mapaMascara0[y].slice(0));
            for (x = 0; x < Mapa.atual[y].length; x++) {
                switch (Mapa.atual[y][x]) {
                    case Mapa.JOGADOR:
                        Jogador.x = x;
                        Jogador.y = y;
                        break;
                    case Mapa.INIMIGO:
                        var inimigoImg = new Image();
                        inimigoImg.src = "src/images/inimigo.png";
                        inimigoImg.onload = desenharTudo;
                        Inimigo.todos.push(new Inimigo(x, y, inimigoImg));
                    break;
                }
            }
        }
    } else if(vitorias === 1){
        for (y = 0; y < mapaMascara1.length; y++) { 
            Mapa.atual.push(mapaMascara1[y].slice(0));
            for (x = 0; x < Mapa.atual[y].length; x++) {
                switch (Mapa.atual[y][x]) {
                    case Mapa.JOGADOR:
                        Jogador.x = x;
                        Jogador.y = y;
                        break;
                    case Mapa.INIMIGO:
                        var inimigoImg = new Image();
                        inimigoImg.src = "src/images/inimigo.png";
                        inimigoImg.onload = desenharTudo;
                        Inimigo.todos.push(new Inimigo(x, y, inimigoImg));
                    break;
                }
            }
        }
    } else if (vitorias === 2){
        for (y = 0; y < mapaMascara2.length; y++) { 
            Mapa.atual.push(mapaMascara2[y].slice(0));
            for (x = 0; x < Mapa.atual[y].length; x++) {
                switch (Mapa.atual[y][x]) {
                    case Mapa.JOGADOR:
                        Jogador.x = x;
                        Jogador.y = y;
                        break;
                    case Mapa.INIMIGO:
                        var inimigoImg = new Image();
                        inimigoImg.src = "src/images/inimigo.png";
                        inimigoImg.onload = desenharTudo;
                        Inimigo.todos.push(new Inimigo(x, y, inimigoImg));
                    break;
                }
            }
        }
    } else if(vitorias === 3){
        for (y = 0; y < mapaMascara3.length; y++) { 
            Mapa.atual.push(mapaMascara3[y].slice(0));
            for (x = 0; x < Mapa.atual[y].length; x++) {
                switch (Mapa.atual[y][x]) {
                    case Mapa.JOGADOR:
                        Jogador.x = x;
                        Jogador.y = y;
                        break;
                    case Mapa.INIMIGO:
                        var inimigoImg = new Image();
                        inimigoImg.src = "src/images/inimigo.png";
                        inimigoImg.onload = desenharTudo;
                        Inimigo.todos.push(new Inimigo(x, y, inimigoImg));
                    break;
                }
            }
        }
    }

    
    
    Mapa.linhas = Mapa.atual.length;
    Mapa.colunas = Mapa.atual[0].length; 
    canvas.width = Mapa.colunas * Mapa.largura;
    canvas.height = Mapa.linhas * Mapa.largura; 
};

Mapa.imgTijolo = new Image(); 
Mapa.imgTijolo.src = "src/images/tijolo.png"; 

Mapa.imgItemBomba = new Image(); 
Mapa.imgItemBomba.src = "src/images/bomba.png"; 

Mapa.imgSolido = new Image();
Mapa.imgSolido.src = "src/images/solid.png"; 

Mapa.imgSolo = new Image();
Mapa.imgSolo.src = "src/images/solo.jpg";

Mapa.desenhar = function (ctx) { 
    if (Mapa.atual != null) { 
        var x, y; 
        for (y = 0; y < Mapa.linhas; y++) { 
            for (x = 0; x < Mapa.colunas; x++) { 
                if (Mapa.atual[y][x] == Mapa.PAREDE) { 
                    ctx.drawImage(Mapa.imgSolido, x * Mapa.largura, y * Mapa.largura, Mapa.largura, Mapa.largura); 
                } else {
                    if (Mapa.atual[y][x] ==  Mapa.TIJOLO) { 
                        ctx.drawImage(Mapa.imgTijolo, x * Mapa.largura, y * Mapa.largura, Mapa.largura, Mapa.largura); 
                    } else {
                        if (Mapa.atual[y][x] == Mapa.ITEMBOMBA){
                            ctx.drawImage(Mapa.imgItemBomba, x * Mapa.largura, y *
                                Mapa.largura, Mapa.largura, Mapa.largura);
                            
                        } else { 
                            ctx.drawImage(Mapa.imgSolo, x * Mapa.largura, y * Mapa.largura, Mapa.largura, Mapa.largura);
                        } 
                    } 
                }
            }
        }
    }
};

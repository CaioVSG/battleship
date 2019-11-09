const game = new Phaser.Game(1200, 630, Phaser.CANVAS, '', {
  preload: preload,
  create: create,
  update: update
})


function preload(){
  game.load.image('battleship','assets/b1.png')
  game.load.image('carrier','assets/B2.png')
  game.load.image('cruiser','assets/B4.png')
  game.load.image('destroyer','assets/B5.png')
  game.load.image('submarine','assets/B3.png')
  game.load.image('board', 'assets/board.png')
  game.load.image('water','assets/water1.png')
}

var submarine;
var destroyer;
var carrier;
var cruiser;
var battleship;
var cont;
var matriz;
matriz = new Array()
for (i=0; i<10; i++) {
  matriz[i] = new Array()
  for (j = 0; j < 10; j++) {
    matriz[i][j] = 0
  }
}
function create (){
  cont = 0;
  game.stage.backgroundColor = "#FFFFFF"

  dimensaoTile = 61;
  for(j=10; j<620; j+=dimensaoTile) { //altura
    for (i = 295; i < 905; i += dimensaoTile) { //largura
      water = this.add.sprite(i, j, 'water')
    }
  }
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  Set the world (global) gravity
  game.physics.arcade.gravity.y = 0;

  game.physics.arcade.enable([submarine, cruiser, destroyer, battleship, carrier]);

}


function update() {
  if(cont==1) { //submarine tamanho 1
    //submarine
    if (!submarine.events.isDragged) {
      submarine.x = aproximacaoX(5, submarine)
    }
    if (!submarine.events.isDragged) {
      submarine.y = aproximacaoY(5, submarine)
    }
  }
  if(cont==2) { //destroyer tamanho 3
    submarine.input.disableDrag()
    x = Math.round((submarine.x -24 - 295)/61) //coordenada x do submarino
    y = Math.round((submarine.y - 3 - 10)/61) //coordenada y do submarino
    matriz[x][y] = 1  //representação de alocação de espaço da matriz
    //destroyer
    if (!destroyer.events.isDragged) {
      destroyer.x = aproximacaoX(4, destroyer)
      xM = Math.round((destroyer.x - 15 - 295)/61)
      y1 = Math.round((destroyer.y - 25 - 10)/61)
      y2 = Math.round((destroyer.y - 25 + 51)/61)
      y3 = Math.round((destroyer.y - 25 + 112)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      if(p1 === 1 || p2 === 1 || p3 === 1){
        if(xM >= 0 && xM< 9){
          destroyer.x += 61
        }
        if(xM==9){
          destroyer.x -= 61
        }
      }
    }
    if (!destroyer.events.isDragged) {
      destroyer.y = aproximacaoY(4, destroyer)
      xM = Math.round((destroyer.x - 15 - 295)/61)
      y1 = Math.round((destroyer.y - 25 - 10)/61)
      y2 = Math.round((destroyer.y - 25 + 51)/61)
      y3 = Math.round((destroyer.y - 25 + 112)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      if(p1 === 1 || p2 === 1 || p3 === 1){
        if(y1 >= 0 && y1< 7){
          destroyer.y += 61
        }
        if(y1 > 7){
          destroyer.y -= 61
        }
      }
    }
  }
  if(cont==3) { //cruiser tamanho 3
    destroyer.input.disableDrag()
    x = Math.round((destroyer.x - 15 - 295)/61) //coordenada de início x do destroyer
    y = Math.round((destroyer.y - 25 - 10)/61) //coordenada de início y do destroyer
    matriz[x][y] = 1//representação de alocação de espaço da matriz
    matriz[x][y+1] = 1
    matriz[x][y+2] = 1
    //cruiser
    if (!cruiser.events.isDragged) {
      cruiser.x = aproximacaoX(2, cruiser)
      xM = Math.round((cruiser.x - 15 - 295)/61)
      y1 = Math.round((cruiser.y - 11 - 10)/61)
      y2 = Math.round((cruiser.y - 11 + 51)/61)
      y3 = Math.round((cruiser.y - 11 + 112)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      if(p1 === 1 || p2 === 1 || p3 === 1){
        if(xM >= 0 && xM< 9){
          cruiser.x += 61
        }
        if(xM==9){
          cruiser.x -= 61
        }
      }
    }
    if (!cruiser.events.isDragged) {
      cruiser.y = aproximacaoY(2, cruiser)
      cruiser.x = aproximacaoX(2, cruiser)
      xM = Math.round((cruiser.x - 15 - 295)/61)
      y1 = Math.round((cruiser.y - 11 - 10)/61)
      y2 = Math.round((cruiser.y - 11 + 51)/61)
      y3 = Math.round((cruiser.y - 11 + 112)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      if(p1 === 1 || p2 === 1 || p3 === 1){
        if(y1 >= 0 && y1< 7){
          cruiser.y += 61
        }
        if(y1>=7){
          cruiser.y -= 61
        }
      }
    }

  }
  if (cont==4){//carrier tamanho 4
    cruiser.input.disableDrag()
    x = Math.round((cruiser.x - 15 - 295)/61) //coordenada de início x do destroyer
    y = Math.round((cruiser.y - 11 - 10)/61) //coordenada de início y do destroyer
    matriz[x][y] = 1//representação de alocação de espaço da matriz
    matriz[x][y+1] = 1
    matriz[x][y+2] = 1
    //carrier
    if (!carrier.events.isDragged) {
      carrier.x = aproximacaoX(1, carrier)
      xM = Math.round((carrier.x - 5- 295)/61)
      y1 = Math.round((carrier.y - 7 - 10)/61)
      y2 = Math.round((carrier.y - 7 + 51)/61)
      y3 = Math.round((carrier.y - 7 + 112)/61)
      y4 = Math.round((carrier.y - 7 + 173)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      p4 = matriz[xM][y4]
      if(p1 === 1 || p2 === 1 || p3 === 1 || p4 === 1){
        if(xM >= 0 && xM< 9){
          carrier.x += 61
        }
        if(xM==9){
          carrier.x -= 61
        }
      }
    }
    if (!carrier.events.isDragged) {
      carrier.y = aproximacaoY(1, carrier)
      xM = Math.round((carrier.x - 5 - 295)/61)
      y1 = Math.round((carrier.y - 7 - 10)/61)
      y2 = Math.round((carrier.y - 7 + 51)/61)
      y3 = Math.round((carrier.y - 7 + 112)/61)
      y4 = Math.round((carrier.y - 7 + 173)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      p4 = matriz[xM][y4]
      if(p1 === 1 || p2 === 1 || p3 === 1 || p4 === 1){
        if(y1 >= 0 && y1< 6){
          carrier.y += 61
        }
        if(y1>=6){
          carrier.y -= 61
        }
      }
    }
  }
  if(cont==5) { //battleship tamanho 6
    //battleship
    carrier.input.disableDrag()
    x = Math.round((carrier.x - 5 - 295)/61) //coordenada de início x do destroyer
    y = Math.round((carrier.y - 7 - 10)/61) //coordenada de início y do destroyer
    matriz[x][y] = 1//representação de alocação de espaço da matriz
    matriz[x][y+1] = 1
    matriz[x][y+2] = 1
    matriz[x][y+3] = 1
    if (!battleship.events.isDragged) {
      battleship.x = aproximacaoX(3, battleship)
      xM = Math.round((battleship.x - 5 - 295)/61)
      y1 = Math.round((battleship.y - 18 - 10)/61)
      y2 = Math.round((battleship.y - 18 + 51)/61)
      y3 = Math.round((battleship.y - 18 + 112)/61)
      y4 = Math.round((battleship.y - 18 + 173)/61)
      y5 = Math.round((battleship.y - 18 + 234)/61)
      y6 = Math.round((battleship.y - 18 + 295)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      p4 = matriz[xM][y4]
      p5 = matriz[xM][y5]
      p6 = matriz[xM][y6]
      if(p1 === 1 || p2 === 1 || p3 === 1 || p4 === 1 || p5 === 1 || p6 === 1){
        if(xM >= 0 && xM< 9){
          battleship.x += 61
        }
        if(xM==9){
          battleship.x -= 61
        }
      }
    }
    if (!battleship.events.isDragged) {
      battleship.y = aproximacaoY(3, battleship)
      xM = Math.round((battleship.x - 5 - 295)/61)
      y1 = Math.round((battleship.y - 18 - 10)/61)
      y2 = Math.round((battleship.y - 18 + 51)/61)
      y3 = Math.round((battleship.y - 18 + 112)/61)
      y4 = Math.round((battleship.y - 18 + 173)/61)
      y5 = Math.round((battleship.y - 18 + 234)/61)
      y6 = Math.round((battleship.y - 18 + 295)/61)
      p1 = matriz[xM][y1]
      p2 = matriz[xM][y2]
      p3 = matriz[xM][y3]
      p4 = matriz[xM][y4]
      p5 = matriz[xM][y5]
      p6 = matriz[xM][y6]
      if(p1 === 1 || p2 === 1 || p3 === 1 || p4 === 1 || p5 === 1 || p6 === 1){
        if(y1 >= 0 && y1< 4){
          battleship.y += 61
        }
        if(y1>=4){
            battleship.y -= 61
        }
      }
    }
  }
  if(cont == 6){
    battleship.input.disableDrag()
    x = Math.round((battleship.x - 5 - 295)/61) //coordenada de início x do destroyer
    y = Math.round((battleship.y - 18 - 10)/61) //coordenada de início y do destroyer
    matriz[x][y] = 1//representação de alocação de espaço da matriz
    matriz[x][y+1] = 1
    matriz[x][y+2] = 1
    matriz[x][y+3] = 1
    matriz[x][y+4] = 1
    matriz[x][y+5] = 1
  }
}

function aproximacaoY(param1, param2){
  if(param1 == 1){
    for(i=10; i<376; i+=61){
      if(i <= param2.y && param2.y <= i+61){
        return i+7
      }
    }
    if(param2.y > 376){
      return 383
    }
    if(param2.y < 10){
      return 17
    }

  }

  if(param1 == 2){
    for(i=10; i<437; i+=61){
      if(i <= param2.y && param2.y <= i+61){
        return i+11
      }
    }
    if(param2.y > 437){
      return  448
    }
    if(param2.y < 10){
      return 21
    }
  }

  if(param1 == 3){
    for(i=10; i<254; i+=61){
      if(i <= param2.y && param2.y <= i+61){
        return i+18
      }
    }
    if(param2.y > 254){
      return 272
    }
    if(param2.y < 10){
      return 28
    }
  }

  if(param1 == 4){
    for(i=10; i<437; i+=61){
      if(i <= param2.y && param2.y <= i+61){
        return i+25
      }
    }
    if(param2.y > 437){
      return 462
    }
    if(param2.y < 10){
      return 35
    }
  }

  else{
    for(i=10; i<559; i+=61){
      if(i <= param2.y && param2.y <= i+61){
        return i+3
      }
    }
    if(param2.y > 559){
      return 562
    }
    if(param2.y < 10){
      return 13
    }
  }

}

function aproximacaoX(param1, param2){
  if(param1 == 1) {
    for(i=295; i<844; i+=61){
      if (i<= param2.x && param2.x <=i+61){
        return i+5;
       }
    }
    if(param2.x > 844){
      return 849;
    }
    if(param2.x < 295){
      return 300;
    }

  }

  if(param1 == 2){
    for(i=295; i<844; i+=61){
      if (i<= param2.x && param2.x <=i+61){
        return i+15;
      }
    }
    if(param2.x > 844){
      return 859;
    }
    if(param2.x < 295) {
      return 310;
    }
  }

  if(param1 == 3){
    for(i=295; i<844; i+=61){
      if (i<= param2.x && param2.x <=i+61){
        return i+5;
      }
    }
    if(param2.x > 844){
      return 849;
    }
    if(param2.x < 295){
      return 300;
    }
  }

  if(param1 == 4){
    for(i=295; i<844; i+=61){
      if (i<= param2.x && param2.x <=i+61){
        return i+15;
      }
    }
    if(param2.x > 844){
      return 859;
    }
    if(param2.x < 295){
      return 310;
    }
  }

  else{
    for(i=295; i<844; i+=61){
      if (i<= param2.x && param2.x <=i+61){
        return i+24;
      }
    }
    if(param2.x > 844){
      return 868;
    }
    if(param2.x < 295){
      return 319;
    }
  }
}

function rotacionar(param1) {
  if(param1.angle == 0){
    return 90;
  }
  else{
    return 0;
  }
}

function iniciar() {
}

function reiniciar() {

}

function ranking() {

}

function carregarBarco() {
  switch (cont) {
    case 0:
      submarine = game.add.sprite(650, 450, 'submarine')
      submarine.x = aproximacaoX(5, submarine)
      submarine.y = aproximacaoY(5, submarine)
      submarine.inputEnabled = true;
      submarine.input.enableDrag();
      cont = 1
      break
    case 1:
      destroyer = game.add.sprite(700, 400, 'destroyer')
      destroyer.x = aproximacaoX(4, destroyer)
      destroyer.y = aproximacaoY(4, destroyer)
      destroyer.inputEnabled = true;
      destroyer.input.enableDrag();
      cont = 2
      break
    case 2:
      cruiser = game.add.sprite(750, 400, 'cruiser')
      cruiser.x = aproximacaoX(2, cruiser)
      cruiser.y = aproximacaoY(2, cruiser)
      cruiser.inputEnabled = true;
      cruiser.input.enableDrag();

      cont = 3
      break
    case 3:
      carrier  = game.add.sprite(810, 400, 'carrier');
      carrier.x = aproximacaoX(1, carrier)
      carrier.y = aproximacaoY(1, carrier)
      carrier.inputEnabled = true;
      carrier.input.enableDrag();
      cont = 4
      break
    case 4:
      battleship  = game.add.sprite(850, 400, 'battleship');
      battleship.x = aproximacaoX(3, battleship)
      battleship.y = aproximacaoY(3, battleship)
      battleship.inputEnabled = true;
      battleship.input.enableDrag();
      cont = 5
      break
    case 5:
      cont = 6
      break
  }
}
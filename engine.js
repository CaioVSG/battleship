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

function create (){
  dimensaoTile = 61;
  for(j=10; j<620; j+=dimensaoTile) {
    for (i = 295; i < 905; i += dimensaoTile) {
      this.add.sprite(i, j, 'water')
    }
  }
  game.physics.startSystem(Phaser.Physics.ARCADE)
  carrier  = this.add.sprite(390, 210, 'carrier');
  cruiser = this.add.sprite(215, 400, 'cruiser')
  battleship  = this.add.sprite(925, 10, 'battleship');
  destroyer = this.add.sprite(980, 400, 'destroyer')
  submarine = this.add.sprite(1020, 630, 'submarine')

  carrier.inputEnabled = true
  carrier.input.enableDrag(true);


  cruiser.inputEnabled = true
  cruiser.input.enableDrag(true);
  cruiser.x = aproximacaoX(2, cruiser)
  cruiser.y = aproximacaoY(2, cruiser)

  battleship.inputEnabled = true
  battleship.input.enableDrag(true);
  battleship.x = aproximacaoX(3, battleship)
  battleship.y = aproximacaoY(3, battleship)

  destroyer.inputEnabled = true
  destroyer.input.enableDrag(true);
  destroyer.x = aproximacaoX(4, destroyer)
  destroyer.y = aproximacaoY(4, destroyer)

  submarine.inputEnabled = true
  submarine.input.enableDrag(true);
  submarine.x = aproximacaoX(5, submarine)
  submarine.y = aproximacaoY(5, submarine)

}

function update(){
  //carrier
  if(!carrier.events.isDragged){
    carrier.x = aproximacaoX(1, carrier)
  }
  if(!carrier.events.isDragged){
    carrier.y = aproximacaoY(1, carrier)
  }
  //cruiser
  if(!cruiser.events.isDragged){
    cruiser.x = aproximacaoX(2, cruiser)
  }
  if(!cruiser.events.isDragged){
    cruiser.y = aproximacaoY(2, cruiser)
  }
  //battleship
  if(!battleship.events.isDragged){
    battleship.x = aproximacaoX(3, battleship)
  }
  if(!battleship.events.isDragged){
    battleship.y = aproximacaoY(3, battleship)
  }
  //destroyer
  if(!destroyer.events.isDragged){
    destroyer.x = aproximacaoX(4, destroyer)
  }
  if(!destroyer.events.isDragged){
    destroyer.y = aproximacaoY(4, destroyer)
  }
  //submarine
  if(!submarine.events.isDragged){
    submarine.x = aproximacaoX(5, submarine)
  }
  if(!submarine.events.isDragged){
    submarine.y = aproximacaoY(5, submarine)
  }
}

function listener(param1){
  param1.events.onInputOut.add(set(param1))
}

function set(param1){
  param1.x = game.input.mousePointer.x
  param1.y = game.input.mousePointer.y
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
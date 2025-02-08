//Nathan Skinner, Space Attack!, 10,Personally Im proud of myself from modding a game rather then starting from scratch it made a lot of things harder
// as I had to work around code and had to fully understand all the factors of rocket patrol I also love that theres 2 types of ships that require different mechanics,
// Im proud that I made my own sprite sheet and altered assets to make them distinct for the mechanics at play
//
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    render:{
      pixelArt: true
  },
    physics:{
      default:'arcade',
      arcade: {
          debug:false,
      }
          },
    scene: [ Menu, Play,Credits ]
  }
  
  let game = new Phaser.Game(config)
  let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3
let keyFIRE, keyRESET, keyLEFT, keyRIGHT,keyPLACE,keyC
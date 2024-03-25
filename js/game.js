class Game {
    // code to be added
    constructor() {
        this.startScreen  = document.querySelector("#game-intro") ;
        this.gameScreen  =   document.querySelector("#game-screen") ;
        this.gameEndScreen  = document.querySelector("#game-end") ;
        this.player = new Player(this.gameScreen,200,500,100,150, "./images/car.png");
        this.height = 600
        this.width = 500
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.gameIntervalId 
        this.gameLoopFrecuency = Math.round(1000/60)
      }

      start(){
        this.gameScreen.style.height = `${this.height}px`
        this.gameScreen.style.width = `${this.width}px`
        //hide start screen
        this.startScreen.style.display = "none"
        //show game screen
        this.gameScreen.style.display = "block"
        this.gameIntervalId = setInterval(this.gameLoop.bind(this), this.gameLoopFrecuency);
      }

      gameLoop(){
        this.update()
        if(this.gameIsOver){
            clearInterval(this.gameIntervalId) 
        } 
      }

      update(){
        this.player.move()
        new Obstacle()
      }
}
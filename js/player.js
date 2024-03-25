class Player{
    constructor(gameScreen,left,top,width,height, imgSrc){
        this.gameScreen = gameScreen
        this.left = left
        this.top = top
        this.width = width
        this.height = height
        this.directionX = 0 //horiz movment direct.
        this.directionY = 0 //vertical dir.
        this.element = document.createElement("img")
        this.element.src = imgSrc;
        this.element.style.position = "absolute"
        this.element.style.width = `${width}px`
        this.element.style.height = `${height}px`
        this.element.style.left = `${left}px`
        this.element.style.top = `${top}px`

        this.gameScreen.appendChild(this.element)
        
    }

    move(){
        this.left += this.directionX
        this.top  += this.directionY

        //boundaries of the game screen
        if(this.left > this.width){
            this.left = this.width
        }
        if(this.left < 0){
            this.left = 0
        }
        if(this.top > this.height){
            this.top = this.height
        }
        if(this.top < 0){
            this.top = 0
        }
        //update the player's position
        this.updatePosition()

    }
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
    didCollide(obstacle){
        const playerRect = this.element.getBoundingClientRect()
        const obstacleRect = obstacle.element.getBoundingClientRect()

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
          ) {
            return true;
          } else {
            return false;
          }
        }

    }

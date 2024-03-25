class Obstacle{
    constructor(gameScreen ){
        this.gameScreen = gameScreen 
        //horiz pos
        this.left = Math.random() * 300
        this.top = 0
        this.width = 100
        this.height = 150
        this.element = document.createElement("img");
        
        this.element.src = "./images/redCar.png";
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move(){
        this.top += 3
        updatePosition() // Update the obstacle's position on the screen
    }

    updatePosition(left , top){
        // Update the obstacle's position based on the properties left and top
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}
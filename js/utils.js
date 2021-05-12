function Ant(speed){
    this.slope = randomNumber(-1,1);
    this.direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];
    this.bgImage = new Image()
    this.bgImage.src = "images/ant2.png";
    this.width =20;
    this.height =40;
    this.x= randomNumber(0, WIDTH-this.width);
    this.y= randomNumber(0, HEIGHT-this.height);
    

    this.dx= speed*this.direction;
    this.dy= -1*this.slope*this.dx;

    this.draw = () => {
        ctx.beginPath();
        ctx.drawImage(this.bgImage, this.x, this.y, this.width,this.height);
        ctx.fill();
        ctx.closePath();
    }

    this.update =(myIndex)=>{

        ants.forEach(function(ant, index){
            if(index!=myIndex){
                if (this.x < ant.x + ant.width &&
                    this.x + this.width> ant.x &&
                    this.y< ant.y + ant.height &&
                    this.y+ this.height > ant.y) {
                        this.dx = -this.dx;
                        this.dy = -this.dy;
                    }
            
            }
        }.bind(this)
        );


        if(this.y + this.dy > HEIGHT-this.height || this.y + this.dy < 0) {
            this.dy = -this.dy;
        }

        if(this.x + this.dx > WIDTH-this.width || this.x + this.dx < 0) {
            this.dx = -this.dx;
        }


        this.x += this.dx;
        this.y += this.dy;  
    }
};

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
};

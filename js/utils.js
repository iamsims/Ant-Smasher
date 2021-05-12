function Ant(speed, width, height, image){
    this.slope = randomNumber(-1,1);
    this.direction = DIRECTION[Math.floor(Math.random() * DIRECTION.length)];
    this.bgImage = new Image();
    this.bgImage.src = image;
    this.width =width;
    this.height =height;
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
            distX=ant.x- this.x; 
            distY=ant.y- this.y;
            if(index!=myIndex){
                if (this.x < ant.x + ant.width &&
                    this.x + this.width> ant.x &&
                    this.y< ant.y + ant.height &&
                    this.y+ this.height > ant.y) {
                        this.dx = -this.dx;
                        this.dy = -this.dy;

                        this.x-=distX/ANTCOUNT;
                        this.y-=distY/ANTCOUNT; 

                    if(this.x<0)this.x=0;
                    if(this.x>WIDTH-this.width) this.x= WIDTH-this.width;
                    if(this.y<0)this.y=0;
                    if(this.y>HEIGHT-this.height) this.y= HEIGHT-this.height;
                    
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

function check(event, canvasLeft, canvasTop){
    var x = event.pageX - canvasLeft;
    var y = event.pageY - canvasTop;

    ants.forEach(function(element, index) {
        if (y > element.y && y < element.y + element.height 
            && x > element.x && x < element.x + element.width) {
            ants.splice(index,1);
        }
    });
}

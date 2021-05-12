// center the canvas
var style = canvas.style;
style.marginLeft = "auto";
style.marginRight = "auto";
style.marginTop = "20px";
var parentStyle = canvas.parentElement.style;
parentStyle.textAlign = "center";
parentStyle.width = "100%";


canvasLeft = canvas.offsetLeft + canvas.clientLeft;
canvasTop = canvas.offsetTop + canvas.clientTop;


canvas.addEventListener('mousedown', function(event) {
    var x = event.pageX - canvasLeft;
    var y = event.pageY - canvasTop;

    ants.forEach(function(element, index) {
        if (y > element.y && y < element.y + element.height 
            && x > element.x && x < element.x + element.width) {
            ants.splice(index,1);
        }
    });

});

var ants =[];

for(let i =0;i<ANTCOUNT; i++){
    ants[i] = new Ant(SPEED);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ants.forEach(function(ant){ant.draw();});
    ants.forEach(function(ant,index){ant.update(index);});
}

setInterval(draw, REFRESH_TIME);

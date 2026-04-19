let canvas;
let ctx;

const ALTO_GATO=50;
const ANCHO_GATO=100;
const ALTO_COMIDA=50;
const ANCHO_COMIDA=50;

function graficarGato(){
    ctx.fillStyle = "blue";
    ctx.fillRect(canvas.width / 2 - 50,canvas.height / 2 - 25,ANCHO_GATO,ALTO_GATO);
}

function graficarComida(){
    ctx.fillStyle = "red"; 
    ctx.fillRect(0,0,ALTO_COMIDA,ANCHO_COMIDA);
}

function iniciarJuego(){
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");

    graficarGato();
    graficarComida();
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato(){
    graficarRectangulo(canvas.width / 2 - 50,canvas.height / 2 - 25,ANCHO_GATO,ALTO_GATO,"blue");
}

function graficarComida(){
    graficarRectangulo(canvas.width - 50,canvas.height - 50,ALTO_COMIDA,ANCHO_COMIDA,"red");
}
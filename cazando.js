let canvas;
let ctx;
let gatoX;
let gatoY;
let comidaX;
let comidaY;
let puntos=0;
let tiempo=10;
let intervaloTiempo;

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

    gatoX = (canvas.width / 2) - (ANCHO_GATO / 2);
    gatoY = (canvas.height / 2) - (ALTO_GATO / 2);

    comidaX = canvas.width - ANCHO_COMIDA;
    comidaY = canvas.height - ALTO_COMIDA;

    graficarGato();
    graficarComida();

    intervaloTiempo = setInterval(restarTiempo, 2000);
}

function graficarRectangulo(x, y, ancho, alto, color){
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
}

function graficarGato(){
    graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "blue");
}

function graficarComida(){
    graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "red");
}

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function moverIzquierda(){
    gatoX = gatoX - 10;
    if(gatoX < 0){
        gatoX = 0;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha(){
    gatoX = gatoX + 10;
    if(gatoX + ANCHO_GATO > canvas.width){
        gatoX = canvas.width - ANCHO_GATO;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba(){
    gatoY = gatoY - 10;
    if(gatoY < 0){
        gatoY = 0;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo(){
    gatoY = gatoY + 10;
    if(gatoY + ALTO_GATO > canvas.height){
        gatoY = canvas.height - ALTO_GATO;
    }
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision(){
    if ( gatoX < comidaX + ANCHO_COMIDA &&
         gatoX + ANCHO_GATO > comidaX && 
         gatoY < comidaY + ALTO_COMIDA && gatoY + ALTO_GATO > comidaY){
        puntos = puntos + 1;
        mostrarEnSpan("puntos",puntos);
        if(puntos == 6){
            alert("GANADOR!!!!!");
            clearInterval(intervaloTiempo);
            return;
        }    
        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}

function restarTiempo(){
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);
    if(tiempo == 0){
        clearInterval(intervaloTiempo);
        alert("SE ACABÓ EL TIEMPO");
    }
}
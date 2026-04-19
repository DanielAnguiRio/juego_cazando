let canvas;
let ctx;

function graficarGato(){
    ctx.fillStyle = "blue";
    ctx.fillRect(
        canvas.width / 2 - 50,
        canvas.height / 2 - 25,
        100,
        50
    );
}

function iniciar(){
    canvas = document.getElementById("areaJuego");
    ctx = canvas.getContext("2d");

    graficarGato();
}
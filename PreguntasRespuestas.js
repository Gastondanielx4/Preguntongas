'use strict'
const preguntas = [
    {   
        numeroDePregunta:1,
        pregunta: "Cual es la capital de Chile?",
        respuestas: 
        {
            a: "No se pero queda cerca del Mar",
            b: "Chile",
            c: "Amar azul",
        },
        correcta:"a",
    },
    
    {
        numeroDePregunta:2,
        pregunta:"¿Como deberia llamarse nuestro pais?",
        respuestas:
        {
            a:"Argentain",
            b:"Argenzuela",
            c:"Argenchina",
        },
        correcta:"b",
    },

    {
        numeroDePregunta:3,
        pregunta:"¿Que es lo mejor de Argentina?",
        respuestas:
        {
            a:"El Asado",
            b:"La aventura (chorros vs laburantes)",
            c:"Los memes argentinos",
        },
        correcta:"c",
    },

    {
        numeroDePregunta:4,
        pregunta:"¿Cual es el trabajo mas ñoqui?",
        respuestas:
        {
            a:"Project Manager (EMA)",
            b:"Municipal",
            c:"Docente",
        },
        correcta:"a",
    },
    {
        numeroDePregunta:5,
        pregunta:"¿Quien es el mejor amigo/a del hombre?",
        respuestas:
        {
            a:"Algún marica encubierto (no declarado)",
            b:"Manuela",
            c:"El perro",
        },
        correcta:"a",
    },
    {   
        numeroDePregunta:6,
        pregunta: "¿Cual es el trabajo mas gay?",
        respuestas: 
        {
            a: "Profe de Danza",
            b: "Desarrollador (Frontend) - Lo que hace Matias",
            c: "Peluquero",
        },
        correcta:"b",
    },
]

let puntaje = 0;
let i = 0;
let cantidadDePreguntas = preguntas.length
let boton1 = document.getElementById('btn1')
let boton2 = document.getElementById('btn2')
let boton3 = document.getElementById('btn3')

function actualizarPuntaje(){
    document.getElementById('puntos').innerHTML = puntaje;
}

function realizarCuestionario(i) {
    let a = preguntas[i].respuestas.a
    let b = preguntas[i].respuestas.b
    let c = preguntas[i].respuestas.c
    
    document.getElementById('numero_pregunta').innerHTML = (preguntas[i].numeroDePregunta)
    document.getElementById('pregunta').innerHTML = (preguntas[i].pregunta)
    document.getElementById('btn1').innerHTML = a
    document.getElementById('btn2').innerHTML = b
    document.getElementById('btn3').innerHTML = c
    boton1.addEventListener('click', click1,) 
    boton2.addEventListener('click', click2,)
    boton3.addEventListener('click', click3,)
}

function habilitarBotones(){
    boton1.disabled = false;
    boton2.disabled = false;
    boton3.disabled = false;
}

function deshabilitarBotones(){
    boton1.disabled = true;
    boton2.disabled = true;
    boton3.disabled = true;
}

function pasarPregunta () {
    let botonPasar = document.getElementById('pasarPregunta')
    botonPasar.addEventListener('click',clickSiguiente)
}

function clickSiguiente () {
    i++;
    habilitarBotones()
    if(i < preguntas.length){
        realizarCuestionario(i),
        document.getElementById('div_resultado').className = "resultado",
        document.getElementById('btn1').className = "boton"
        document.getElementById('btn2').className = "boton"
        document.getElementById('btn3').className = "boton"
        console.log(i);
        if(i === preguntas.length-1){
            document.getElementById('pPuntos').innerHTML = "PUNTAJE TOTAL";
            document.getElementById('pasarPregunta').innerHTML = "¿REINICIAR?"
        }
    }
    else{
        document.getElementById('pasarPregunta').innerHTML = "Reiniciando..."
        setTimeout( function() { window.location.href = "index.html"; }, 3000 );
        console.log("Termino el cuestionario");
    }
}

function click1 (){
    let eleccion = "a";
    deshabilitarBotones()
    if(eleccion === preguntas[i].correcta){
        puntaje+=10;
        document.getElementById('btn1').className = "boton correcto";
        actualizarPuntaje()
        darCorrecto ()
        pasarPregunta ()
    }
    else{
        puntaje-=10
        document.getElementById('btn1').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
        pasarPregunta ()
    }
}

function click2 (){
    let eleccion = "b";
    deshabilitarBotones()
    if(eleccion === preguntas[i].correcta){
        document.getElementById('btn2').className = "boton correcto";
        puntaje+=10;
        actualizarPuntaje()
        darCorrecto ()
        pasarPregunta ()
    }
    else{
        puntaje-=10
        document.getElementById('btn2').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
        pasarPregunta () 
    }
}

function click3 (){
    let eleccion = "c";
    deshabilitarBotones()
    if(eleccion === preguntas[i].correcta){
        document.getElementById('btn3').className = "boton correcto";
        puntaje+=10;
        actualizarPuntaje()
        darCorrecto ()
        pasarPregunta ()
    }
    else{
        puntaje-=10
        document.getElementById('btn3').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
        pasarPregunta ()
    }
}

function darCorrecto () {
    document.getElementById('div_resultado').className = "resultado correcto";
    document.getElementById('resultado').innerHTML = "Correcto"
}

function darIncorrecto() {
    document.getElementById('div_resultado').className = "resultado incorrecto";
    document.getElementById('resultado').innerHTML = "Incorrecto"
}

actualizarPuntaje()

document.addEventListener('DOMContentLoaded', realizarCuestionario (i), false)
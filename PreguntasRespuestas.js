'use strict'
let puntaje = 0;
actualizarPuntaje()

function actualizarPuntaje(){
    document.getElementById('puntos').innerHTML = puntaje;
}

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

let i = 0;
let contador = 0

function realizarCuestionario(i) { 
    
    document.getElementById('numero_pregunta').innerHTML = (preguntas[i].numeroDePregunta)
    document.getElementById('pregunta').innerHTML = (preguntas[i].pregunta)
    let boton1 = document.getElementById('btn1')
    let boton2 = document.getElementById('btn2')
    let boton3 = document.getElementById('btn3')
    let a = preguntas[i].respuestas.a
    let b = preguntas[i].respuestas.b
    let c = preguntas[i].respuestas.c
    let botonPasar = document.getElementById('pasarPregunta')
    botonPasar.addEventListener('click', () => {i++,realizarCuestionario(i)},)
    document.getElementById('btn1').innerHTML = a
    document.getElementById('btn2').innerHTML = b
    document.getElementById('btn3').innerHTML = c
   for (let e= 0; e<=contador; e++){
        boton1.addEventListener('click', click1,) 
        boton2.addEventListener('click', click2,)
        boton3.addEventListener('click', click3,)
   } 
  
}

function click1 (){
    contador++;
    let eleccion = "a";
    if(eleccion === preguntas[i].correcta){
        puntaje+=10;
        document.getElementById('btn1').className = "boton correcto";
        actualizarPuntaje()
        darCorrecto ()
    }
    else{
        puntaje-=10
        document.getElementById('btn1').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
    }
}

function click2 (){
    contador++;
    let eleccion = "b";
    if(eleccion === preguntas[i].correcta){
        document.getElementById('btn2').className = "boton correcto";
        puntaje+=10;
        actualizarPuntaje()
    }
    else{
        puntaje-=10
        document.getElementById('btn2').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
    }
}

function click3 (){
    contador++;
    let eleccion = "c";
    if(eleccion === preguntas[i].correcta){
        document.getElementById('btn3').className = "boton correcto";
        puntaje+=10;
        actualizarPuntaje()
    }
    else{
        puntaje-=10
        document.getElementById('btn3').className = "boton incorrecto";
        actualizarPuntaje()
        darIncorrecto ()
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

console.log(contador);
document.addEventListener('DOMContentLoaded', realizarCuestionario (i), false)

/* for(let i=0;i<preguntas.length;i++){
    console.log(preguntas[i])
} */

/* function pregunta1()
    let preguntaPregunta1 = "1.¿Cual es la capital de Chile?"
    let correcta1= "No se pero queda cerca del Mar"
    let incorrectas= ["Chile","Amar azul","No se pero queda cerca del Mar"]
    if (respuesta1 == correcta1 ){
        puntaje += 10;
        alert ("Correcto, por no hacerte el intelectual poniendo la Opcion 3 y  bien por bardear a los indios barranqueros estos, +10 Pa! \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, era la opcion bardera...\nTu puntaje es "+ puntaje );
    }
}
let pregunta1 = {
    preguntaPregunta1 = "1.¿Cual es la capital de Chile?";
    correcta1= "No se pero queda cerca del Mar";
    incorrecta1_1= "Chile";
    incorrecta1_2= "Amar azul";
    function respuestas1 () {
        if (respuesta1 == correcta1 ){
            puntaje += 10;
            alert ("Correcto, por no hacerte el intelectual poniendo la Opcion 3 y  bien por bardear a los indios barranqueros estos, +10 Pa! \nTu puntaje es "+ puntaje );
        }
        else {
            puntaje -= 10;
            alert ("Incorrecto, era la opcion bardera...\nTu puntaje es "+ puntaje );
        }
    }
}
 */
/* let puntaje = 0;


alert ("1.¿Cual es la capital de Chile?\n(responde con el número de la respuesta o tipea tal cual la respuesta)"); 
let correctaUno = "No se pero queda cerca del Mar"
let respuestaUno = prompt ('1.Chile\n2.'+correctaUno+ '\n3.Santiago de Chile\n4.Amar azul');
    if (respuestaUno == 2 || respuestaUno == correctaUno ){
        puntaje += 10;
        alert ("Correcto, por no hacerte el intelectual poniendo la Opcion 3 y  bien por bardear a los indios barranqueros estos, +10 Pa! \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, era la opcion bardera...\nTu puntaje es "+ puntaje );
    }

alert ('2.¿Como deberia llamarse nuestro pais?\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaDos = "Republica Peronia"
let respuestaDos = prompt ('1. '+ correctaDos + '\n 2. Argentain\n3. Argenzuela\n4. Argenchina')
    if(respuestaDos == 1 || respuestaDos == correctaDos ){
        puntaje += 10;
        alert ("Esta es la que mas gracia me causa, pero todas podrian ser correctas.\nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, pero podria ser cualquiera.\n Tu puntaje es "+ puntaje );
    }

alert ('3.¿Que es lo mejor de Argentina?\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaTres = "El gordo Barassi"
let respuestaTres = prompt ('1. El Asado\n 2. "La aventura (chorros vs laburantes)"\n3. ' + correctaTres + '\n4. El diegote')
    if(respuestaTres == 3 || respuestaTres == correctaTres ){
        puntaje += 10;
        alert ("Correcta, porque se me canta en este momento! \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, lo lamento si pusiste al diego o al asado =( \nTu puntaje es "+ puntaje );
    }

alert ('4.¿"Cual es el trabajo mas ñoqui?"\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaCuatro = "Project Manager (EMA)"
let respuestaCuatro = prompt ('1. Municipal\n2. Docente\n3. Politico\n4. '+ correctaCuatro)
    if(respuestaCuatro == 4 || respuestaCuatro == correctaCuatro ){
        puntaje += 10;
        alert ("Incorrecto, pero ganaste 10pts por bardearlo al Ema; \nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, seguramente necesitas un ascenso...\nTu puntaje es "+ puntaje );
    }
    
alert ('5.¿"Cual es el trabajo mas gay?"\n(responde con el número de la respuesta o tipea tal cual la respuesta)\n\n\n\n\nPuntaje: '+ puntaje);
let correctaCinco = "Desarrollador (Frontend) - Lo que hace Matias"
let respuestaCinco = prompt ('1. Profe de Danza\n2. Peluquero\n3. Diseñador de moda\n4. '+ correctaCinco +'\n5. De lo que sea en Federacion Patronal Seguros')
    if(respuestaCinco == 4 || respuestaCinco == correctaCinco ){
        puntaje += 10;
        alert ("Tambien es Incorrecto, pero por bardearlo a Mati 10+ pa vos...\nTu puntaje es "+ puntaje );
    }
    else {
        puntaje -= 10;
        alert ("Incorrecto, tambien por chupa medias...\nTu puntaje es "+ puntaje );
    } */
        
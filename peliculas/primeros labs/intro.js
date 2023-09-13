// variables, constantes, consola (log, info, warn, error, assert)

//Declaramos variables con let
let pelicula_del_momento =  "Barbie";

//Imprimimos en la consola con console.log()
console.log(pelicula_del_momento);

//Declaramos constantes con const
const precio = 55;

console.log(precio);

console.error("Este es un mensaje de error");

console.warn("Esta es una advertencia");

console.info("Esto es información");

//assert continúa la ejecución si el valor es verdadero
console.assert(precio === 55);


// Alcance de las variables

if(precio > 50) {
    var respuesta = "Muy caro";
} else {
    var respuesta = "Buen precio";
}
//respuesta sigue existiendo porque var tiene alcance de función
console.log(respuesta);

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//La siguiente línea tiene error porque i tiene alcance de ámbito
//console.log(i);


// alert, prompt, confirm
/*
alert("Hola mundo!")

const is_hungry = confirm("¿Tienes hambre?");
console.log(is_hungry);

const nombre = prompt("¿Cómo te llamas?");
console.log("Hola " + nombre);
*/

// funciones tradicionales

function vamonos() {
    console.log("¡Vámonos, ya se acabó la clase!");
}

vamonos();


// funciones modernas
const funcion_anonima = () => {
    console.log("Esto es una función anónima");
}

funcion_anonima();

// html dinámico con eventos
const oppenheimer = document.getElementById("Oppenheimer");

console.log(oppenheimer);

const despliega_rating = () => {
    const rating = "10/10 ¡Excelente!";
    oppenheimer.innerHTML = rating;
    oppenheimer.onclick = despliega_nombre;
}

const despliega_nombre = () => {
    const nombre = "Oppenheimer";
    oppenheimer.innerHTML = nombre;
    oppenheimer.onclick = despliega_rating;
}

oppenheimer.onclick = () => {
    console.log("Hiciste click en Oppenheimer");
    despliega_rating();
}


// arreglos

const arreglo = ["Elemento"];

arreglo.push("Otro elemento");

arreglo[10] = "Uno más";

//arreglos asociativos
arreglo["Once"] = "Otro más";

//recorrido tradicional del arreglo
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo
for(let posicion in arreglo) {
    console.log(posicion);
}

for(let valor of arreglo) {
    console.log(valor);
}

//objetos (json: javascript object notation)
const objeto = {
    atributo_1: "valor_1",
    atributo_2: "valor_2", 
    atributo_3: "valor_3"
}

console.log(objeto);
console.log(objeto.atributo_1);

for(let posicion in objeto) {
    console.log(posicion);
}

function ejercicio_1() {
    //Ejercicio del laboratorio
    //...

    document.getElementById("ejercicio_1").innerHTML = "Respuesta del ejercicio 1";
}

ejercicio_1();


document.getElementById("favorita").onkeyup = () => {
    
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    
    document.getElementById("favorita").style.color = `rgb(${red}, ${green}, ${blue})`;
}

let peliculas = [
    {
        nombre: "Titanic",
        imagen: "https://i.etsystatic.com/27725708/r/il/3989d8/2912524873/il_fullxfull.2912524873_6vc1.jpg",
        sinopsis: "Historia de amor entre Jack y Rose en el trasatlántico más grande de la época"
    }, 
    {
        nombre: "Oppenheimer",
        imagen: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_.jpg",
        sinopsis: "Historia de la bomba atómica"
    }, 
    {
        nombre: "Barbie",
        imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
        sinopsis: "La muñeca más famosa de la historia"
    }, 
    {
        nombre: "TMNT",
        imagen: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/5d830b134127975.61ce89a78d10c.jpg",
        sinopsis: "Las aventuras flipantes de las tortugas verdes en Nueva York"
    },
];

function genera_posters() {

    let html = `<div class="columns">`;

    for(let pelicula of peliculas) {
        html += 
            `<div class="column">
                <div class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
                            </figure>
                            </div>
                            <div class="media-content">
                            <p class="title is-4">${pelicula.nombre}</p>
                            </div>
                        </div>
                    
                        <div class="content">
                            ${pelicula.sinopsis}
                            <br>
                            <button class="button is-danger is-rounded" onclick=quitar("${pelicula.nombre}")>Quitar</button>
                        </div>
                    </div>
                </div>
            </div>`;
    }

    html += `</div>`;

    document.getElementById("posters").innerHTML = html;
}

function quitar(nombre) {
    
    let nuevas_peliculas = new Array();

    for(let pelicula of peliculas) {

        if (pelicula.nombre != nombre) {
            nuevas_peliculas.push(pelicula);
        }
    }

    peliculas = nuevas_peliculas;

    genera_posters();
}

document.getElementById("boton_cartelera").onclick = genera_posters;
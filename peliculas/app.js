console.log("hola desde node!");

//fs es el módulo de filesystem de node, 
//que sirve para acceder a los métodos para manipular el sistema de archivos
const filesystem = require('fs');

//writeFileSync es un método que sirve para escribir en un archivo de manera síncrona.
//Por default, los métodos de node son asíncronos.
filesystem.writeFileSync('hola.txt', 'Hola desde node');

console.log("Ya acabé de escribir el archivo");

//Imprime a los 7 segundos un mensaje
setTimeout( () => { 
        console.log("Ya te hackié jojojo"); 
    }, 7000);

//El siguiente código imprime de manera asíncrona el arreglo ordenado
const arreglo = [5000, 60, 90, 100, 10, 20, 10000, 0, 120, 2000, 340, 1000, 50];

for (let item of arreglo) {
    setTimeout(() => {
        console.log(item);
    }, item);
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

//El módulo http contiene las funciones para 
//recibir peticiones HTTP y enviar respuestas de HTTP
const http = require('http');

const server = http.createServer( (request, response) => {    
    console.log(request.url);
    console.log(request.method);

    if (request.url == "/") {

        response.setHeader('Content-Type', 'text/html');
        let html = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Películas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Películas</h1>
                        <div class="columns">`;

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
                        
        html += `       </div>
                    </div>
                </section>
            </main>
            <footer>
        
            </footer>
            </body>
            </html>
        `;

        response.write(html);
        response.end();

    } else if(request.url == "/new" && request.method == "GET") {
        
        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Películas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Registro de películas</h1>
                        <form action="/new" method="POST">
                            <label for="nombre">Nombre de la película</label>
                            <input id="nombre" name="nombre" class="input" type="text" placeholder="Oppenheimer">
                            <br><br>
                            <label for="sinapsis">Sinapsis de la película</label>
                            <textarea id="sinapsis" name="sinapsis" class="textarea" placeholder="La historia de la bomba atómica"></textarea>
                            <br>
                            <input id="registrar" name="registrar" type="submit" value="Registrar" class="button is-info">
                        </form>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();

    } else if(request.url == "/new" && request.method == "POST") { 
        
        const datos = [];

        request.on('data', (dato) => {
           // console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const primera_variable = datos_completos.split('&')[0];
            console.log(primera_variable);
            const primer_valor = primera_variable.split('=')[1];
            console.log(primer_valor);
            
            const sinopsis = datos_completos.split('&')[1].split('=')[1];
            response.write(`La película fue registrada`);
            peliculas.push({
                nombre: primer_valor,
                imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
                sinopsis: sinopsis
            });
            return response.end();
        });

    } else {
        response.statusCode = 404;

        response.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>Películas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
        </head>
        <body>
            <header>
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                    
                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section class="section">
                    <div class="container">
                        <h1 class="title">Tu película no se encontró</h1>
                    </div>
                </section>
            </main>
            </body>
            </html>
        `);

        response.end();
    }

});

server.listen(3000);
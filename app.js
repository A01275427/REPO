const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const csrf = require('csurf');
const csrfProtection = csrf();
app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');

    //Para crear una nueva cookie
    response.setHeader('Set-Cookie', 'ultimo_acceso=' + new Date() + '; HttpOnly');
    
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

const rutasPeliculas = require('./routes/peliculas.routes');

app.use('/peliculas', rutasPeliculas);

const rutasUsuarios = require('./routes/users.routes');

app.use('/users', rutasUsuarios);

app.use((request, response, next) => {
    console.log('Otro middleware!');

    response.statusCode = 404;

    response.send('Es película es muuuy independiente'); //Manda la respuesta
});

app.listen(3000);
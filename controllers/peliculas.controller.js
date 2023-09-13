const Pelicula = require('../models/pelicula.model');

exports.get_add = (request, response, next) => {
    response.render('peliculas/add.ejs', {
        username: request.session.username || '',
        isLoggedIn: request.session.isLoggedIn || false,
    });
};

exports.post_add = (request, response, next) => {

    console.log(request.body);

    const pelicula = new Pelicula({
        nombre: request.body.nombre,
        imagen: "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg",
        sinopsis: request.body.sinopsis,
    });

    pelicula.save()
        .then(() => {
            return response.redirect('/peliculas');
        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });
}

exports.get_list = (request, response, next) => {
    
    console.log(request.session.privilegios);

    const ultimo_acceso = new Date(request.get('Cookie').split('=')[1]);

    console.log(ultimo_acceso.getTime());

    const tiempo_transcurrido = (new Date().getTime() - ultimo_acceso.getTime()) / 1000;

    console.log(tiempo_transcurrido);

    Pelicula.fetch(request.params.id)
        .then(([rows, fieldData]) => {
            console.log(rows);
            console.log(fieldData);

            return response.render('peliculas/list.ejs', {
                peliculas: rows,
                tiempo_transcurrido: tiempo_transcurrido,
                username: request.session.username || '',
                isLoggedIn: request.session.isLoggedIn || false,
                privilegios: request.session.privilegios || [],
            });

        }).catch((error) => {
            console.log(error);
            response.redirect('/users/login');
        });

}
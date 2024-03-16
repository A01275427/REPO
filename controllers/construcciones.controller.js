const Construccion = require('../models/construccion.model');

exports.get_construir = (request, response, next) => {
    response.render('construir'); 
};

exports.post_construir = (request, response, next) => {
    console.log(request.body);
    const construccion = 
        new Construccion(request.body.nombre, request.body.imagen);
    construccion.save();
    response.redirect('/');
};

exports.get_root = (request, response, next) => {
    console.log('Ruta /');
    response.render('construcciones', {
        construcciones: Construccion.fetchAll(),
    });
}
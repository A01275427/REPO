module.exports = (request, response, next) => {
    
    let has_privilege = false;

    for(let permiso of request.session.privilegios) {
        if (permiso.nombre == 'peliculas_ver') {
            has_privilege = true;
        }
    }

    if (!has_privilege) {
        return response.redirect('/users/login');
    }

    next();
}
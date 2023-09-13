const db = require('../util/database');

module.exports = class Pelicula {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nueva_pelicula) {
        this.nombre = nueva_pelicula.nombre || "Barbie";
        this.imagen = nueva_pelicula.imagen || "https://www.instyle.com/thmb/vZCEkHB1nBMIes2tcKTUAMP0zf0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BarbiePosterEmbed-de7c886812184414977730e920d77a65.jpg";
        this.sinopsis = nueva_pelicula.sinopsis || "La muñeca más famosa de la historia";
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return db.execute(
            'INSERT INTO peliculas(nombre, imagen, sinopsis) VALUES (?, ?, ?)', 
            [this.nombre, this.imagen, this.sinopsis]);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM peliculas');
    }

    static fetch(id) {
        if (id) {
            return db.execute('SELECT * FROM peliculas WHERE id = ?', 
            [id]);
        } else {
            return this.fetchAll();
        }
    }

}
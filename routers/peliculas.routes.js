const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canVerPeliculas = require('../util/can-ver-peliculas');
const canAgregarPeliculas = require('../util/can-add-pelicula');
const peliculasController = require('../controllers/peliculas.controller');

router.get('/add', isAuth, canAgregarPeliculas, peliculasController.get_add);
router.post('/add', isAuth, canAgregarPeliculas, peliculasController.post_add);
router.get('/list', isAuth, canVerPeliculas, peliculasController.get_list);
router.get('/list/:id', isAuth, canVerPeliculas, peliculasController.get_list);
router.get('/:id', isAuth, canVerPeliculas, peliculasController.get_list);
router.get('/', isAuth, canVerPeliculas, peliculasController.get_list);

module.exports = router;
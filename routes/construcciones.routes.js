const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canBuild = require('../util/can-build');
const construccionesController = require('../controllers/construcciones.controller');

router.get('/construir', isAuth, canBuild, construccionesController.get_construir);
router.post('/construir', isAuth, canBuild, construccionesController.post_construir);
router.get('/buscar/:valor_busqueda', isAuth, canView, construccionesController.get_buscar);
router.get('/:construccion_id', isAuth, canView, construccionesController.get_root);
router.get('/', isAuth, canView, construccionesController.get_root);

module.exports = router;

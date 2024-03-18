const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const construccionesController = require('../controllers/construcciones.controller');

router.get('/construir', isAuth, construccionesController.get_construir);
router.post('/construir', isAuth, construccionesController.post_construir);
router.get('/:construccion_id', isAuth, construccionesController.get_root);
router.get('/', isAuth, construccionesController.get_root);

module.exports = router;

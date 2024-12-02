import express from 'express';
import ClientesDireccionesController from '../controllers/ClientesDirecciones.js';

const router = express.Router();

router.get('/', ClientesDireccionesController.findAll);
router.get('/:id', ClientesDireccionesController.findOne);
router.post('/', ClientesDireccionesController.create);
router.delete('/:id', ClientesDireccionesController.remove);
router.put('/', ClientesDireccionesController.update);

export default router;
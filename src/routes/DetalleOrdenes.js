import express from 'express';
import DetalleOrdenesController from '../controllers/DetalleOrdenes.js';

const router = express.Router();

router.get('/', DetalleOrdenesController.findAll);
router.get('/:id', DetalleOrdenesController.findOne);
router.post('/', DetalleOrdenesController.create);
router.delete('/:id', DetalleOrdenesController.remove);
router.put('/', DetalleOrdenesController.update);

export default router;
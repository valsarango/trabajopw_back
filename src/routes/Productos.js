import express from 'express';
import ProductosController from '../controllers/Productos.js';

const router = express.Router();

router.get('/', ProductosController.findAll);
router.get('/:id', ProductosController.findOne);
router.post('/', ProductosController.create);
router.delete('/:id', ProductosController.remove);
router.put('/', ProductosController.update);

export default router;
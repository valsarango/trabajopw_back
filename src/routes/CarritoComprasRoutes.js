import express from 'express';
import CarritoComprasController from '../controllers/CarritoCompras.js';

const router = express.Router();

router.get('/', CarritoComprasController.findAll);
router.get('/:id', CarritoComprasController.findOne);
router.post('/', CarritoComprasController.create);
router.delete('/:id', CarritoComprasController.remove);
router.put('/', CarritoComprasController.update);

export default router;
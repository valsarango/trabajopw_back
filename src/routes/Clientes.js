import express from 'express';
import ClientesController from '../controllers/Clientes.js';

const router = express.Router();

router.get('/', ClientesController.findAll);
router.get('/:id', ClientesController.findOne);
router.post('/', ClientesController.create);
router.delete('/:id', ClientesController.remove);
router.put('/', ClientesController.update);

export default router;
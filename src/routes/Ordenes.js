import express from 'express';
import OrdenesController from '../controllers/Ordenes.js';

const router = express.Router();

router.get('/', OrdenesController.findAll);
router.get('/:id', OrdenesController.findOne);
router.post('/', OrdenesController.create);
router.delete('/:id', OrdenesController.remove);
router.put('/', OrdenesController.update);

export default router;
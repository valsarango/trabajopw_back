import express from 'express';
import UsuariosController from '../controllers/Usuarios.js';

const router = express.Router();

router.get('/', UsuariosController.findAll);
router.get('/:id', UsuariosController.findOne);
router.post('/', UsuariosController.create);
router.delete('/:id', UsuariosController.remove);
router.put('/', UsuariosController.update);

export default router;
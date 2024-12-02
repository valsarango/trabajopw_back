import express from 'express';
import AuthController from '../controllers/Auth.js';

const router = express.Router();

router.post('/InicioSesion', AuthController.login);

export default router;
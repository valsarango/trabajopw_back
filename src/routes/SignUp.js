import express from 'express';
import SignUpController from '../controllers/SignUp.js';

const router = express.Router();

router.post('/', SignUpController.signup);

export default router;
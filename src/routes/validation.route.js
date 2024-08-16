import { Router } from 'express';
import {
  getValUser
} from '../controllers/validation.controller.js';

const router = Router();

router.get('/login/valiUser/:correo/:contrasena', getValUser);


export default router;
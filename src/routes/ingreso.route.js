import { Router } from "express";
import {
    createIngreso,
    getIngresos,
    getIngreso,
    updateIngreso,
    deleteIngreso
} from '../controllers/ingreso.controller.js';

const router = Router();

router.get('/login/user/ingresos', getIngresos);

router.get('/login/user/ingreso/:IdIngreso', getIngreso);

router.post('/login/nuevoingreso', createIngreso)

router.patch('/login/user/:IdIngreso', updateIngreso)

router.delete('/login/user/:IdIngreso', deleteIngreso)

export default router;
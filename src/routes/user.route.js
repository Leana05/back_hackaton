import { Router } from "express";
import {
  createNewUser,
  getUsers,
  getUser,
} from '../controllers/user.controller.js';

const router = Router();

router.get('/login/users', getUsers);

router.get('/login/user/:Id', getUser);

router.post('/login/register', createNewUser)

export default router;
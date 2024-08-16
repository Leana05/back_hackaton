import { Router } from "express";
import {
  createNewCategory,
  getCategories,
  getCategory,
} from '../controllers/category.controller.js';

const router = Router();

router.get('/login/user/categories', getCategories);

router.get('/login/user/category/:Id', getCategory);

router.post('/login/user/category', createNewCategory)

export default router;
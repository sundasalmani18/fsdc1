import express from 'express';
import {
    addCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory
} from '../controller/categories.js'

const router = express.Router();

router.get('/', getCategories);
router.get('/:id', getCategory);
router.post('/', addCategory);
router.delete('/:id', deleteCategory);
router.put('/:id', updateCategory);


export default router;
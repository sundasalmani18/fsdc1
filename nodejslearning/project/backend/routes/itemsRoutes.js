import express from 'express';
import {

    getItems,
    getItem,
    addItem,
    updateItem,
    deleteItem
  
} from '../controller/item.js'

const router = express.Router();

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', addItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);


export default router;
import express from 'express';
import {

    getBookTables,
    getBookTable,
    addBookTable,
    updateBookTable,
    deleteBookTable
  
} from '../controller/booktable.js'

const router = express.Router();

router.get('/', getBookTables);
router.get('/:id', getBookTable);
router.post('/', addBookTable);
router.put('/:id', updateBookTable);
router.delete('/:id', deleteBookTable);


export default router;
import express from 'express';
import {

    getMenu
    
  
} from '../controller/categoryMenu.js'

const router = express.Router();

router.get('/', getMenu);



export default router;
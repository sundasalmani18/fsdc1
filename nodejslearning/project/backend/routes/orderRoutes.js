import express from 'express';
import {

    getOrders,
    getOrder,
    addOrder
    // updateOrder,
  
} from '../controller/orders.js'

const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.post('/', addOrder);
// router.put('/:id', updateOrder);


export default router;
import express from 'express';
import {
    register,
    // getUser,
    // addUser,
    // updateUser,
    // deleteUser

} from '../controller/auth.js'

const router = express.Router();

router.post('/register', register);
// router.get('/:id', getUser);
// router.post('/', addUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);




export default router;
import express from 'express';
import {
    login,
    // getUser,
    // addUser,
    // updateUser,
    // deleteUser

} from '../controller/login.js'

const router = express.Router();

router.post('/user', login);
// router.get('/:id', getUser);
// router.post('/', addUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);




export default router;
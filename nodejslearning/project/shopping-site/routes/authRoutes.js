import express from 'express';
import {
    register,
    login,
    logout

} from '../controller/auth.js'

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
// router.get('/:id', getUser);
// router.post('/', addUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);


export default router;
import express from "express";
import { authenticate } from '../middleware/authenticate.js'

import {
    authRegister,
    authLogin,
    getAllUsers

} from "../controller/authController.js";

const router = express.Router();

router.post("/register", authRegister);
router.post("/login", authLogin);

router.get('/user', getAllUsers);



export default router;
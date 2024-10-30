import express from "express";
import {
    submitSupportForm,
  

} from "../controller/supportController.js";

const router = express.Router();

router.post("/", submitSupportForm);




export default router;
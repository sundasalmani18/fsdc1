import express from "express";
import {
    fetchMessage,
  

} from "../controller/fetchmessageController.js";

const router = express.Router();

router.get("/:userId", fetchMessage);




export default router;
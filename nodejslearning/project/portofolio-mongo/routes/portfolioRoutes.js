import express from "express";
import {
    addPortofolioData,
    getPortofolioData

} from "../controller/addData.js";

const router = express.Router();

router.get("/", getPortofolioData);
router.post("/", addPortofolioData);



export default router;
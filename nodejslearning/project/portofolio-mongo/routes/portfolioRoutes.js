import express from "express";
import {
    addPortofolioData,
    getPortofolioData

} from "../model/addDataModel.js";

const router = express.Router();

router.get("/", getPortofolioData);
// router.get("/:id", getEmployee);
router.post("/", addPortofolioData);
// router.put("/:id", updateEmployee);
// router.delete("/:id", deleteEmployee);


export default router;
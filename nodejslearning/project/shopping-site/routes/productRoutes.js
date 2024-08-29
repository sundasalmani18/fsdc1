import express from "express";
import upload from "../middleware/multerStorge.js";

import {
  getProducts,
  getProduct,
  addProducts,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", upload.single("image"), addProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

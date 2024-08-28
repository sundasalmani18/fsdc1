import express from "express";
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
router.post("/", addProducts);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

// router.get('/:id', getUser);
// router.post('/', addUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;

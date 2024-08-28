import express from "express";
import {
  getCategories,
  getCategory,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../controller/auth.js";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", addCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

// router.get('/:id', getUser);
// router.post('/', addUser);
// router.put('/:id', updateUser);
// router.delete('/:id', deleteUser);

export default router;

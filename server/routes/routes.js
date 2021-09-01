import express from "express";
import { userSignUp, userLogIn } from "../controllers/userController.js";
import { getProducts } from "../controllers/productController.js";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogIn);
router.get("/products", getProducts);

export default router;

import { Express } from "express";
import { userSignUp, userLogIn } from "../controllers/userController.js";

const router = express.router();

router.post("/signup", userSignup);

export default router;

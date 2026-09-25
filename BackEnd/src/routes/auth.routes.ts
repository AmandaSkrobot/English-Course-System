import { Router } from "express";
import { login } from "../controllers/login.controller.js"
import { register } from "../controllers/register.controller.js"

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
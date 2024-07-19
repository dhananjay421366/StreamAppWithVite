import { Router } from "express";
import { signIn } from "../controllers/user.controller.js";

const router = Router();

router.route("/signIn").post(signIn)

export default router
import express from "express";
import authController from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/login", authController.login);
router.post("/register", authController.register);
router.get("/me", authController.getUserProfile);

export default router;

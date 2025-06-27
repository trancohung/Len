import express from "express";
import userController from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.getAll);
router.post("/register", userController.register);

export default router;

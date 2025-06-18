import express from "express";
import userRoute from "./user.route.js";

const RootRouter = express.Router();

RootRouter.use("/users", userRoute);

export default RootRouter;

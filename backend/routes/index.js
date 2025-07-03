import express from "express";
import authRoute from "./auth.route.js";
import productRoute from "./product.route.js";
import storeRoute from "./store.route.js";
const RootRouter = express.Router();

RootRouter.use("/auth", authRoute);
RootRouter.use("/products", productRoute);
RootRouter.use("/stores", storeRoute);

export default RootRouter;

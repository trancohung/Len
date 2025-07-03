import express from "express";
import storeController from "../controllers/store.controller.js";

const router = express.Router();

router.get("/", storeController.getAllStores);
router.get("/:id", storeController.getStoreById);
router.post("/", storeController.createStore);
router.put("/:id", storeController.updateStore);
router.post("/:id/extend", storeController.extendStore);
router.delete("/:id", storeController.deleteStore);

export default router;

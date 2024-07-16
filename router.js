import express from "express";
import UserController from "./controllers/userController.js";
import authenticate from "./middleware/authenticate.js";

const router = express.Router();

// USER
router.get("/api/user", UserController.get);

router.get("/api/user/me", authenticate, UserController.me);
router.get("/api/user/:id", UserController.detail);

router.post("/api/user", UserController.store);
router.post("/api/user/login", UserController.login);

router.put("/api/user/:id", UserController.update);
router.delete("/api/user/:id", UserController.delete)


export default router;

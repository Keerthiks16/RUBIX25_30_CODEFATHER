import express from "express";
import {
  authCheck,
  login,
  logout,
  signup,
} from "../controllers/auth.controllers.js";
import { protectRoutes } from "../middlewares/protectRoutes.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/authcheck", protectRoutes, authCheck);

export default router;

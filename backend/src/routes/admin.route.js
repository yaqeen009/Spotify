import { Router } from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { createSong } from "../controllers/admin.controller.js";

const router = Router()

//method = post
router.post('/', protectRoute, requireAdmin, createSong)

export default router
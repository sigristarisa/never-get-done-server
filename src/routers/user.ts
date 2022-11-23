import { Router } from "express";
import { createUser } from "../controllers/user";

const router = Router();

router.post("/:name", createUser);

export default router;

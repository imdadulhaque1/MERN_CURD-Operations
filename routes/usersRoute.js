import express from "express";
import { createUser, getUsers } from "../controllers/usersController";

const router = express.Router();

router.get("/users", getUsers);
router.get("/user", createUser);

export default router;
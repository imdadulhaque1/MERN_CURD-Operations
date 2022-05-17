import express from "express";
import { createUser, getSingleUser, getUsers } from "../controllers/usersController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getSingleUser);

export default router;
// module.exports = router;
import express from "express";
import { createUser, deleteSingleUser, getSingleUser, getUsers, updateSingleUser } from "../controllers/usersController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getSingleUser);
router.delete("/user/:id", deleteSingleUser);
router.put("/user/:id", updateSingleUser);

export default router;
// module.exports = router;
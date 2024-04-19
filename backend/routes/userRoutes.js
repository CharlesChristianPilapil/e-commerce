import express from "express";
const router = express.Router();
import {
  authUser,
  registerUSer,
  logoutUSer,
  getUSerProfile,
  updateUSerProfile,
  getUsers,
  getUserById,
  deleteUsers,
  UpdateUsers,
} from "../controller/userController.js";

import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUSer).get(protect, admin, getUsers);

router.post("/logout", logoutUSer);

router.post("/login", authUser);

router
  .route("/profile")
  .get(protect, getUSerProfile)
  .put(protect, updateUSerProfile);

router
  .route("/:id")
  .delete(protect, admin, deleteUsers)
  .get(protect, admin, getUserById)
  .put(protect, admin, UpdateUsers);

export default router;

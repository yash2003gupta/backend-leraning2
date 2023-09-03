import express from "express";

import { getAllUsers } from "../controllers/user.js";
import { register } from "../controllers/user.js";
import { specialFunc } from "../controllers/user.js";
import { getUserDetails } from "../controllers/user.js";
import { updateUser } from "../controllers/user.js";
import { deleteUser } from "../controllers/user.js";
const router = express.Router();

router.get("/all",getAllUsers);

   router.post("/new", register);
   router.get("/userid/special",specialFunc);

// router.get("/userid/:id", getUserDetails);

// router.put("/userid/:id", updateUser);
// router.delete("/userid/:id", deleteUser);

router.route("/userid/:id").get(getUserDetails).put(updateUser).delete(deleteUser);

 export default router; 
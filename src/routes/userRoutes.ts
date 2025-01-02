import { Router } from "express";
import { createUser, getAllUsers, updateUserEmail, updateUserPassword } from "@/controllers/user/userController";
import { updateUserBuyer } from "@/controllers/user/userBuyerController";
import { verifyToken } from "@/middlewares/verifyToken";
const router = Router();

router.get("/", verifyToken, getAllUsers);
router.post("/", createUser);
router.put('/email/:id', verifyToken, updateUserEmail)
router.put('/password/:id', verifyToken, updateUserPassword)

router.put('/buyer/update/:id', verifyToken, updateUserBuyer)

export default router;
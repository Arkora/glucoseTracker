import express from "express";
import { createUser,getCredentials,getAllUsers,getUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/all',getAllUsers)
router.get('/get_id/:id',getUser)
router.post('/login',getCredentials)
router.post('/signup', createUser)




// router.patch('/:id', updateUser);
// router.delete('/:id',deleteUser);

export default router;
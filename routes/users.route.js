import { request, response, Router } from "express";
import { createUser, getAllUsers, userById } from "../controllers/users.controller.js";


const router = Router()

router.get('/', getAllUsers) 
router.get('/:id', userById) 
router.post('/', createUser)

export default router
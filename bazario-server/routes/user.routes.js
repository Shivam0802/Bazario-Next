import express from 'express';
const router = express.Router();
import { signup } from '../controllers/user.controller.js';

router.post('/signup', signup);
//router.post('/login', login);
//router.delete('/delete', deleteUser);

export default router;
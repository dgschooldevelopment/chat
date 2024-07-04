import express from 'express';
import { getUserProfile, login, newUser } from '../controllers/user.js';
import { singleAvatar } from '../middlewares/multer.js';
import isAuthinticated from '../middlewares/auth.js';
const app = express.Router();





app.post('/new', singleAvatar, newUser,);
app.post('/login', login);



app.get('/profile',isAuthinticated, getUserProfile);

export default app;
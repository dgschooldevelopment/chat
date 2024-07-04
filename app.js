import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import { errorMiddleware } from './middlewares/error.js';
import userRoute from './routes/user.js';
import { connectDB } from './utils/feachers.js';

dotenv.config({
    path: "./.env"
});

connectDB(process.env.MONGO_URI);
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());   // To parse JSON data.
app.use(express.urlencoded({ extended: true }));  // Updated line
app.use(cookieParser());

// Routes
app.use('/user', userRoute);
app.use(errorMiddleware);
app.get('/', (req, res) => {
    res.send('Welcome to Home');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);  // Server is listening on port 3000.
});
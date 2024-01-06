import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

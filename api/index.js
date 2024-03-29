import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRouter from './routes/route.js'
dotenv.config();
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("connected to MongoDB");
    })
    .catch((err) =>{
        console.log(err);
    })
const app = express();

app.use(express.json())

app.listen(3000,() => {
    console.log('Server is running on port 3000!!!');
});

app.use('/api/data',userRouter)
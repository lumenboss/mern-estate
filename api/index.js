import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';


dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>console.log("connected")).catch((err)=> console.log(err));

const app = express();



app.listen(3000, ()=>{
    console.log("Server running on port ")
})
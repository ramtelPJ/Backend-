import dotenv from 'dotenv'
import connectDB from "./db/db.js";

dotenv.config({
    path:"./.env"
})
connectDB();

// require('dotenv').config()
// import mongoose from "mongoose";

// import { DB_NAME } from "./constant";
// import express from 'express';
// const app=express();


// (async()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log(error)
//         })
//         app.listen(process.env.PORT,()=>{
//             `App is listening on port: ${process.env.PORT}`
//         })
//     } catch (error) {
//         console.log("Error:",error);
//     }
// })()
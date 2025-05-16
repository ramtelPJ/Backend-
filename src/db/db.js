import mongoose from 'mongoose';

import { DB_NAME } from '../constant.js';

const connectDB=async()=>{
    try {
        const connectionCheck=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: ${connectionCheck.connection.host}`)
    } catch (error) {
        console.log("Connection Error: ",error);
        process.exit(1);
    }
}

export default connectDB;
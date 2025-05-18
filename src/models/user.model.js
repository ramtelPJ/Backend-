import mongoose, {Schema} from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";
const userSchema=new Schema({

    username:{
        type:String,
        required:true,
        lowerCase:true,
        unique:true,
        index:true,
        trim:true,
        
    },
    email:{
        type:String,
        required:true,
        lowerCase:true,
        unique:true,
        trim:true
    },
    fullname:{
        trim:true,
        type:String,
        unique:false,
        lowerCase:false,
    },
    avatar:{
        type:String,
required:true,

    },
    coverImage:{
        required:true,

    },
    watchHistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video",
        }
    ],
    password:{
        type:String,
        required:true,
        lowerCase:false,

    },
    refreshToken:{
        type:String,
        
    }

})

userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
this.password=bcrypt.hash(this.password,10)
next();
})
userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password)// if pw matches : true else false
}
userSchema.methods.generateAccessToken=async function(){
return await jwt.sign(
    {
    _id:this._id,
    email:this.email,
    username:this.username
},
process.env.ACCESS_TOKEN_SECRET,{
    expiresIn:process.env.ACCESS_TOKEN_EXPIRY
}
)
}
userSchema.methods.generateAccessToken=async function(){
    return await jwt.sign(
        {
        _id:this._id,
        email:this.email,
        username:this.username
    },
    process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
    )
}
export const User=mongoose.model("User",userSchema);
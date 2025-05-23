import { asyncHandler } from "../utils/asyncHandler";

const registerUser=asyncHandler(async(req,res)=>{
    res.status(500).json({
        message:"The server is OK!",
    })
})
export {registerUser};
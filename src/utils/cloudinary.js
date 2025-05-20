import {v2 as cloudinary} from "cloudinary";
import fs from "fs";  // handle the file: filesystem: manage the filesystem

cloudinary.config({ 
    cloud_name:process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET// Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary=async (localFilePath)=>{
    try {
        if(!localFilePath) return null;

    // Upload the file in cloudinary
    const response=await cloudinary.v2.uploader.upload(localFilePath,{
        resource_type:"auto"
    })
    console.log(response.url);
    return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)  // remove the locally saved temp file as the upload operation got paid
        return null;
    }
}
export {uploadOnCloudinary}
import { tryCatch } from "./error.js";




const isAuthinticated= tryCatch(
    async(req,res,next) => {
    
        console.log("Cookie: ",req.cookies);
        next();
    }
);


export default isAuthinticated;
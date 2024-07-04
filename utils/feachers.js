import mongoose from "mongoose"
import  jwt from "jsonwebtoken";
const connectDB = (uri) => {
    mongoose.connect(uri, { dbName: "dgdbChat" })
    .then((data)=>console.log(`Connected to DB: ${data.connection.host}`))
    .catch ((err) =>{
        throw err;
    });
}
const cokieeOption={
    maxAge: 15* 24* 60* 60* 1000,
    sameSite:"none",
    httpOnly: true,
    secure: true,
};
const sendToken=(res,user, code, massage) => {
    const token =jwt.sign({_id:user._id},process.env.JWT_SECRET)



    return res.status(code).cookie("dgChat-token",token, cokieeOption).json({
        success: true,
        massage,
        
    })

};


export{
    connectDB,sendToken
}
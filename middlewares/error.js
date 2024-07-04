const errorMiddleware = (err, req, res, next) => {
    err.message ||= "Internal Server Error!!!!";
    err.statusCode ||= 500;

    res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};


const tryCatch=(passedFunc)=> async (req, res, next)=>{
    try {
        await passedFunc(req, res, next);
    } catch (error) {
        next(error);
    }



};



export { errorMiddleware ,tryCatch };

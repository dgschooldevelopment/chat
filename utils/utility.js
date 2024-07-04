class errorHandler extends Error{
    constructor( message,statusCode){
        super(statusCode, message);
        this.statusCode=statusCode;
        this.message=message;
    }
};

export {errorHandler};
import mongoose,{ Schema, model,Types } from "mongoose";



const Schema=new Schema({


    content: String,

    attachement:[
        {
            public_id:{
                type:String,
                required:true,
            },
            url:{
                type:String,
                required:true,
            },
        }
    ],


    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    },
    chat:{
        type:Types.ObjectId,
        ref:"Chat",
        required:true,
    },


},{
    timestamps:true,
});


export const Massage=mongoose.models.Massage || models("Massage",schema);

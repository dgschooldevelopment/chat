import mongoose,{ Schema, model,Types } from "mongoose";



const Schema=new Schema({

    name:{
        type:String,
        required:true,
    },
    groupChat:{
       type:Boolean,
       default:false,
    },
    creater:{
        type:Types.ObjectId,
        ref:"User",
    },
    members:[
        {
            type:Types.ObjectId,
        ref:"User",
    }]

},{
    timestamps:true,
});


export const Chat=mongoose.models.Chat || models("Chat",schema);

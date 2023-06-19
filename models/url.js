const mongoose =require('mongoose');
const urlSchema = new mongoose.Schema(
    {
    note:{
        type:String,
        required:true,
    },
    shortid:{
        type: String,
        required:true,
        unique:true,
    },
    redirectURL: {
        type:String,
        required:true,
    },
    visitedHistory:
        [{ timestamp:{type:Number} }],
    },
    {
        timestamps:true
    }
);

    const URL = mongoose.model('url',urlSchema);
    module.exports=URL;
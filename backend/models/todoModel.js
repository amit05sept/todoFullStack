const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        required:true,
        trim:true,
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

const todos = mongoose.model("Todo",todoSchema);

module.exports=todos;
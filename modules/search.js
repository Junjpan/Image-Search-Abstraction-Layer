let mongoose=require('mongoose');

let searchSchema=mongoose.Schema({
    term:String,
    when:{
        type:Date,
        default:new Date()
    }
})

module.exports=mongoose.model("Search",searchSchema);
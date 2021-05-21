const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let book=new Schema({
    bookid:{type:Number, required:true,max:100},
    name:{type:String, required:true,max:100},
    author:{type:String,required:true},
    year:{type:Number,required:true}

});

module.exports=mongoose.model('Book',book);
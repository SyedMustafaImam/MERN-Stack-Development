const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let member=new Schema({
    userid:{type:String, required:true,max:10},
    password:{type:String,required:true},
    name:{type:String,required:true},
    Gender:{type:String,required:true},
    address:{type:String,required:true},
    city:{type:String,required:true},
    country:{type:String,required:true},
});

module.exports=mongoose.model('Member',member);
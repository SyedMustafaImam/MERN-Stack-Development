const mongoose=require('mongoose');
const Schema=mongoose.Schema;

let issuance=new Schema({
    userid:{type:String, required:true,max:100},
    bookid:{type:String,required:true}

});

module.exports=mongoose.model('Issuance',issuance);
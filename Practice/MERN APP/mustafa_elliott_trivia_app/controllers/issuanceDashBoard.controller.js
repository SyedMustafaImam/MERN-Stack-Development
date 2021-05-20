const db=require('../models/index')

//READ
exports.ListBooks=(req,res)=>{
    db.Book.find().then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
}
//UPDATE
exports.ModifyBook=(req,res)=>{
    db.Book.findByIdAndUpdate().then().catch()
}
//DELETE
exports.DeleteBook=(req,res)=>{
    db.Book.findByIdAndUpdate().then().catch()
}
exports.AddBooks=()=>{
    let add= new db.Book({
        userid:req.body.userid,
        bookid:req.body.bookid
    })
    add.save().then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
}

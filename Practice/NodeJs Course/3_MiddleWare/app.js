const express = require('express');
const app = express();

// Middele ware
let loger = (req, res, next)=>{
    console.log(`log from ${req.url}`)
    req.msgs = 'this is from middleware....!!!'
    next(); // used to call the nex method or route
}
// Should be used before actions 
app.use(loger);


// adding validation from url string
let auth = (req, res, next)=>{
    console.log(`log from  Auth`);
    if(req.query.name == 'Mustafa'){
        next();
    }
    else{
        res.send('Access denied!!!');
    }
}


app.get('/', (req,res)=>{
    res.send(`Home Page ${req.msgs}`)
});

app.get('/users', auth ,(req,res)=>{
    console.log(`Name: ${req.query.name}`)
    res.send(`Users Page ${req.msgs}`)
});

app.listen(3000, ()=>{console.log('listing on prot 3000')});



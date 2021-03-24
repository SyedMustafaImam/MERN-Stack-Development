const express = require('express');
let app = express();
let router = express.Router();
 
exports.index = (req,res) => {
  
res.render('index', {
    title:"HOME"
})
    
}
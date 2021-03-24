const express = require('express');
var router = express.Router();

router.get('/', (req,res)=>{
res.end('<h1>teacher Page</h1>')
})

module.exports = router;
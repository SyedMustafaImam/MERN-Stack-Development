const express = require('express');
let router = express.Router();

router.get('/', function(req, res){
    res.send(`Teacher's section`);
    res.end()
})

module.exports = router;

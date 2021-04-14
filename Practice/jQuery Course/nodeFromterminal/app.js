const express = require('express');

const app = express();

app.get('/', (req, res)=>{
console.log("Accesssing page from root /")

})

app.listen(3300, (res)=>{
console.log(res)
	console.log('running at port 3300');
})



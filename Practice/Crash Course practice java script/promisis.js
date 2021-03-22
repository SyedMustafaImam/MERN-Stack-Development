// Promise: Best video on promisise
// -resolve
// -reject
// -pending

function promiseTimeout(ms){
    return new Promise((resolve, reject)=>{
setTimeout(resolve, ms); 
   });
}

promiseTimeout(2000).then(()=>{ console.log('Done!');}).catch(()=>{console.log('Error');  })


var bigTipper=function(a){
var bill = parseInt(a);
console.log(bill+15);
}
bigTipper("200")

names ="mustafa";
console.log(names);
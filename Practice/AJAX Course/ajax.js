console.log("helloworld")


let fectchbtn = document.getElementById('fectchBtn');
fectchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    const xhr = new XMLHttpRequest();
console.log("inside the XHR Fecth Btn");
    // open the object

    // xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
   
//    for post request
    xhr.open('POST', 'https://reqres.in/api/users', true);
xhr.getResponseHeader('Content-type', 'application/json');
    // what to do on progress

   
const xhrs = new XMLHttpRequest();
xhrs.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.onprogress = () => {
    console.log('on progress');

}
xhrs.onload=function(){ 
    if(this.status===200){
    console.log(this.responseText)}
else{console.log('some error occured')}
}
xhrs.send()
}



let popbtn = document.getElementById('popbtn');
popbtn.addEventListener('click', popHandler);

function popHandler(){

    const xhr = new XMLHttpRequest();
    console.log("inside the XHR Pop function Btn");

        // what to do on progress
    
       
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);
    
    xhr.onload=function(){ 
        if(this.status===200){
 let obj = JSON.parse(this.responseText) 
 console.log(toString(obj[0]))
 let list = document.getElementById('list');
 str = "";
 for (key in obj){
     str+=`<li> ${obj[key].employee_name} </li>`
     console.log(obj[key].employee_name) 
 }
 list.innerHTML=str;
}
    else{console.log('some error occured')}
    }
    xhr.send()
}

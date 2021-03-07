// alert("mustafa");
// document.write("By using js mustafa");
document.getElementsByTagName("h1")[0].style.fontSize = "35px";
document.getElementsByTagName("h1")[0].style.color = "red";

var marks = {
    mustafa: 56,
    syed: 80,
    imam: 100,
};
console.log(marks);

let myDate = new Date();
console.log(myDate);
console.log(myDate.getDate() + " : " +
    myDate.getUTCMonth() + " : " +
    myDate.getFullYear());
// let button1 = document.getElementById("clickme");
// // elem.style.background = "yellow";
// button1.classList.add("bg-primary");



let cont = document.getElementsByClassName("container");
createdElement = document.createElement('p');
createdElement.innerText = "This is my created paragraph";
cont[0].appendChild(createdElement);

let cont1 = document.getElementsByClassName("container2");
contentforcont1 = document.createElement("button");
contentforcont1.innerText = "SecondButton";
cont1[0].appendChild(contentforcont1);

let para = document.getElementById("intro");

function remchild() {
    para.classList.add("myText");
    document.getElementsByClassName("container")[0].classList.add("container");
}

function onHovering() {
    document.getElementsByClassName("container")[0].classList.add("container");


}
para.addEventListener('mouseover', function() {
    document.getElementsByClassName("container")[0].style.color = "purple";

    console.log("mouse in the container");
});

para.addEventListener('mouseout', function() {
    document.getElementsByClassName("container")[0].style.color = "black";

    console.log("mouse out of container");
});

var subintro = document.getElementById("subintro");
subintro.addEventListener('mousedown', function() {

    document.getElementsByClassName("container")[0].style.fontSize = "20px";
    console.log("mouseDown");
})
subintro.addEventListener('mouseup', function() {
    console.log("mouseUp");
    document.getElementsByClassName("container")[0].style.fontSize = "12px";


})

function hidedme() {
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }

}
//selecting using Query
sel = document.querySelector(".container2");
console.log(sel)

// Arro Functions
sum = (a, b) => {
    return a + b;
}
logKaro = () => {
        console.log("Log karo after 2ms");
    }
    //setTimeout and SetInterval
setTimeout(logKaro, 2000);

// clr = setInterval(logKaro, 2000);

//Local Stroage
localStorage.setItem('name', 'Mustafa');
console.log(localStorage);
localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();
//JSON
obj = { name: 'Syed Mustafa', reg: 1812134, section: "BSCS-6A" };
// converting JavaScript object to JSON string
jso = JSON.stringify(obj);
console.log(jso);
console.log(typeof jso);
localStorage.setItem('JSON Data', jso);
// converting JSON strting to Javascript Object
parsed = JSON.parse(jso)
console.log(parsed);
console.log(localStorage.getItem("JSON Data"));
// var message = "Mustafa";
// alert("Hello " + message);
// console.log("hello console");

// //OBJECTS
// var car = { color: "red", make: "toyta" };
// console.log(car.color);
// console.log(car.make);

// var bike = new Object();
// bike.make = "sukuzi";
// bike.cc = "150";
// console.log(bike.make + "\n" + bike.cc);
// bike;
// //dont use this.
// var x = Object.create(null);
document.getElementsByTagName("h1").onclick("color:blue");
var picture = ["https://mustafaimam.live/wp-content/uploads/2020/08/VenueFBpost3.png", "https://mustafaimam.live/wp-content/uploads/2020/08/SocialInfo.png", "https://mustafaimam.live/wp-content/uploads/2020/08/2nd-PORSTE.jpg", "https://mustafaimam.live/wp-content/uploads/2020/08/New-year-2020.png", "https://mustafaimam.live/wp-content/uploads/2020/08/banner.png"];

function load() {
    document.getElementById("img_canvas").getElementsByTagName("img")[0].src = picture[0];
    changepic(0);
}

function changepic(n) {
    document.getElementById("img_canvas").getElementsByTagName("img")[0].src = picture[n % picture.length];
    setTimeout(function() { changepic(n + 1) }, 2000);
}
lear
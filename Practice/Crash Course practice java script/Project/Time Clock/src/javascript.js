let myTime;
let min;
let sec;
let optins = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

function time() {
    ctime = new Date();
    let hr;
    let daylight;
    if (ctime.getHours() < 12) {
        daylight = " AM";
        if (ctime.getHours() == "00") {
            hr = 12;
        } else {
            hr = ctime.getHours();
        }

    } else if (ctime.getHours() == "12") {
        daylight = " PM";
        hr = 12;
    } else {
        daylight = " PM";
        hr = ctime.getHours() - 12;
    }
    min = ctime.getMinutes();
    sec = ctime.getSeconds();
    myTime = hr + ' : ' + ctime.getMinutes() + ' : ' + ctime.getSeconds() + 's ' + daylight;
    return myTime;
}

function date() {

    let dates = ctime.toLocaleDateString(undefined, optins);
    return dates;
}
var curr = setInterval(function() {
    document.getElementById('times').innerHTML = time();
    document.getElementById('date').innerHTML = "Date: " + date();

}, 1000);
// console.log(curr);
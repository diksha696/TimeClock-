// this code is all about simple clock in js that starts from here to

let a;
let date;
let time;
const options ={weekday: 'long', year: 'numeric', month : 'long', day: 'numeric'};
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time = a.getHours() + ':' + a.getMinutes() + ':' + a.getSeconds();
    document.getElementById('time').innerHTML = time + " on " + "Date:" +" " + date;
}, 1000);

//and here it ends...



//here come your another code for the clock that starts from here below

function clock() {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    let period = "AM";
  
    if (hrs == 0) {
      hrs = 12;
  }
    if (hrs > 12) {
      hrs = hrs - 12;
      period = "PM";
    }
  
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;
  
    let time = `${hrs}:${mins}:${secs} ${period}`;
    setInterval(clock, 1000);
    document.getElementById("clock").innerText = time;
  }
  
  clock();

  //here the code ends of another clock program..  
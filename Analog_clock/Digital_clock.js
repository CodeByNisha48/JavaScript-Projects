let hour = document.getElementById('hour');
let minitue = document.getElementById('minitue');
let second = document.getElementById('second');

function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minitue.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);
 
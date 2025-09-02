const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minitue = document.getElementById("minitue");
const second = document.getElementById("second");

const formatTime = (time) => {
    return time < 10 ? `0${time}`:time;
}

const updateCountDown = (deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    //calculate days, hours, min, sec from timeDifference

    let calcsecs = Math.floor(timeDifference / 1000) % 60;
    let calcmins = Math.floor(timeDifference / 1000 / 60) % 60;
    let calchours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    let calcdays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    days.textContent = formatTime(calcdays);
    second.textContent = formatTime(calcsecs);
    hours.textContent = formatTime(calchours);
    minitue.textContent = formatTime(calcmins);

    // console.log(days);

}

const countDown = (targetDate) =>{
    setInterval( () => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("December 15 2025 12:00");
countDown(targetDate);

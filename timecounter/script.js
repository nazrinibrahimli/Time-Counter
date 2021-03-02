const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');


const newYear = '1 Jan 2022';

function timecount(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totSec = (newYearDate-currentDate) / 1000;

    const secs = Math.floor(totSec % 60);
    const  mins = Math.floor(totSec / 60) % 60;
    const hours = Math.floor(totSec / 3600) % 24;
    const days = Math.floor(totSec / 3600 / 24);


    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);



}


function formatTime(time) {
    return (time < 10 ? '0' : '') + time ;
}

timecount();
setInterval(timecount, 1000);
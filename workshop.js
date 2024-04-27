let daysEl = document.querySelector('#days');
let hoursEl = document.querySelector('#hours');
let minutesEl = document.querySelector('#minutes');
let secondsEl = document.querySelector('#seconds');

let newYear = new Date("Jan 14, 2024 00:00:00").getTime();
console.log(newYear);

updateCountDown();

function updateCountDown() {
    let now = new Date().getTime();
    let downTime = newYear - now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;

    let d = Math.floor(downTime / days);
    let h = Math.floor((downTime % days) / hours);
    let m = Math.floor((downTime % hours) / minutes);
    let s = Math.floor((downTime % minutes) / seconds);

    daysEl.innerHTML = d;
    hoursEl.innerHTML = h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;

    setTimeout(updateCountDown, 1000); // Update every second
}

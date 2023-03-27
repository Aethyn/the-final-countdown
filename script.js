let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let time = null;
let target = new Date('2023-05-12T18:00:00');

function refreshCounter() {
    time = new Date(target.getTime() - new Date().getTime());

    days.innerHTML = (Math.round(time / 8.64e7)).toString().padStart(2, '0');
    hours.innerHTML = (time.getHours()).toString().padStart(2, '0');
    minutes.innerHTML = (time.getMinutes()).toString().padStart(2, '0');
    seconds.innerHTML = (time.getSeconds()).toString().padStart(2, '0');
}

setInterval(refreshCounter, 1000);

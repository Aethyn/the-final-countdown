let colors = [
    {color: '#230329', background: '#1a98ad'}, // Original theme
    {color: 'blue', background: '#6ddccf'},
    {color: 'dodgerblue', background: '#3f1328'},
    {color: 'skyblue', background: '#144729'},
    {color: 'indigo', background: '#bee261'},
    {color: 'blueviolet', background: '#e1ee3a'},
    {color: 'fuchsia', background: '#1e1849'},
    {color: 'violet', background: '#3a1c51'},
    {color: 'hotpink', background: '#5c0d48'}, // Pink and Plum
    {color: 'red', background: '#080057'}, // Scarlet Red and Royal Purple
    {color: 'orangered', background: '#1f1218'}, // Orangered and Black
    {color: 'orange', background: '#782a22'}, // Orange and Chestnut
    {color: 'gold', background: '#414972'}, // Gold and Midnight blue
    {color: 'yellow', background: '#ad3c61'}, // Laser Lemon and Jazzberry Jam
    {color: 'springgreen', background: '#10564b'} // Spring Green and Pine Green
];

let days = document.querySelector('#days');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');

let time = null;
let target = new Date('2023-05-12T18:00:00');

function refreshCounter() {
    time = new Date(target.getTime() - new Date().getTime());

    if(time <= 0){
        document.querySelector('#main').innerHTML = '<span class="gone">I\'M GONE!<br>🎉🚀🎆<span>';
        return clearInterval(interval);
    }

    days.innerHTML = (Math.round(time / 8.64e7)).toString().padStart(2, '0');
    hours.innerHTML = (time.getHours()).toString().padStart(2, '0');
    minutes.innerHTML = (time.getMinutes()).toString().padStart(2, '0');
    seconds.innerHTML = (time.getSeconds()).toString().padStart(2, '0');
}

let interval = setInterval(refreshCounter, 1000);

let root = document.documentElement;
let randomValue = Math.floor(Math.random() * (colors.length - 1 + 1)) + 1;
root.style.setProperty('--background-color', colors[randomValue].background);
root.style.setProperty('--color', colors[randomValue].color);

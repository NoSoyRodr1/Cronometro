console.log('Hola mundo')

let s = 0;
let m = 0;
let h = 0;
let ms = 0;
function cronometro() {
    crono = setInterval(function() {
    ms++;
    if (ms.toString().length === 1){
        ms = "0"+ ms;
    }
    console.log(ms)
    if (s === 0) {
        s = "0"+ s;
    }
    if (m.toString().length === 1) {
        m = "0"+ m;
    }
    if (h.toString().length === 1) {
        h = "0"+ h;
    }
    if (s.toString().length === 1) {
        s = "0"+ s;
    }
    if (ms === 100) {
        ms = 0;
        s++;
    }
    if (s === 60) {
        s = 0;
        m++;
    }
    if (m === 60) {
        m = 0;
        h++;
    }
    document.getElementById("cronometro").innerHTML = h + ':' + m + ':' + s;
    document.getElementById("cronometro1").innerHTML = h + ':' + m + ':' + s;
    document.getElementById("milisegundos").innerHTML = ms;
}, 10);
music.play();
}
function stopInterval() {
    clearInterval(crono);
    music.pause();qqazszdgfbgtyj;
}
let music = new Audio('./src/Lets groove.mp3');
music.loop =true;
music.playbackRate = 1;


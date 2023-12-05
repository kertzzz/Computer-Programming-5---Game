const startingMinutes = 1; 
let time = startingMinutes * 60;

const countdown = document.getElementById('btn');

setInterval(cd, 900);
function cd() {
    let seconds = time % 60;
    
    seconds = seconds < 0 ? + seconds : seconds;

    countdown.innerHTML = `${seconds}`;
    time--;

    if(countdown <= 0) {
        close;
    }
}
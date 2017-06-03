const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

const secondsDigital = document.querySelector('.second-digital');
const minsDigital = document.querySelector('.min-digital');
const hourDigital = document.querySelector('.hour-digital');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondsDigital.innerHTML = checkTime(seconds);

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    minsDigital.innerHTML = checkTime(mins);

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    hourDigital.innerHTML = checkTime(hour);

    if(secondsDegrees === 90) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = '';
    }
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

setInterval(setDate, 1000);

setDate();

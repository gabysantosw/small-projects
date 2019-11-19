// UI ELEMENTS
const days = document.querySelector('.js-days');
const hours = document.querySelector('.js-hours');
const minutes = document.querySelector('.js-minutes');
const seconds = document.querySelector('.js-seconds');

// SETUP
// 05.29.2020
// .getTime() returns integer in miliseconds
const RELEASE_DATE = new Date("2020-05-29").getTime();

// UPDATE UI EACH SECOND
setInterval(function() {
  let currentDate = new Date().getTime();

  // total miliseconds left / 1000 = total seconds left
  let timeLeft = (RELEASE_DATE - currentDate) / 1000;

  let daysLeft = Math.floor(timeLeft / (60 * 60 * 24));
  let hoursLeft = Math.floor( (timeLeft / (60 * 60)) % 24);
  let minutesLeft = Math.floor( (timeLeft / 60) % 60 );
  let secondsLeft = Math.floor(timeLeft % 60);

  // display result
  if (Number(days.innerText) != daysLeft) {
    if (daysLeft < 10) {
      days.innerText = '0' + daysLeft;
    } else {
      days.innerText = daysLeft;
    }
  }

  if (Number(hours.innerText) != hoursLeft) {
    if (hoursLeft < 10) {
      hours.innerText = '0' + hoursLeft;
    } else {
      hours.innerText = hoursLeft;
    }
  }

  if (Number(minutes.innerText) != minutesLeft) {
    if (minutesLeft < 10) {
      minutes.innerText = '0' + minutesLeft;
    } else {
      minutes.innerText = minutesLeft;
    }
  }

  if (Number(seconds.innerText) != secondsLeft) {
    if (secondsLeft < 10) {
      seconds.innerText = '0' + secondsLeft;
    } else {
      seconds.innerText = secondsLeft;
    }
  }
}, 1000);

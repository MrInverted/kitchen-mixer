const headerBurgerTrigger = document.querySelector(".header__burger");
const headerBurgerNav = document.querySelector(".header nav");

headerBurgerTrigger.onclick = () => {
  headerBurgerTrigger.classList.toggle("active");
  headerBurgerNav.classList.toggle("active");
}



// -------------------



const second = 1000;
const minute = second * 60;
const hour = minute * 60;

const TIMETOSET = hour * 6;
const jsOffset = hour * 3;  // because we have 01.01.1970 03:00

if (!localStorage.getItem("timer")) {
  const finalTime = Date.now() + TIMETOSET;
  localStorage.setItem("timer", finalTime);
}

const TIMEFROMLOCALSTORAGE = +localStorage.getItem("timer");

const timerDOM = document.querySelectorAll(".timer");

setInterval(() => {
  const initialTime = Date.now();
  const timeDifference = TIMEFROMLOCALSTORAGE - initialTime - jsOffset;
  const date = new Date(timeDifference);
  const time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    second: date.getSeconds()
  }

  timerDOM.forEach(item => {
    const hours = item.querySelector(".hours");
    const minutes = item.querySelector(".minutes");
    const seconds = item.querySelector(".seconds");

    hours.textContent = time.hours;
    minutes.textContent = time.minutes;
    seconds.textContent = time.second;
  })

}, 1000)



// -------------------



const swiper = new Swiper('.swiper', {
  loop: true,
  speed: 400,
  spaceBetween: 100,
  loopPreventsSliding: false,
  autoHeight: true,
  autoplay: {
    delay: 5000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});



// -------------------

function scrollToID(id) {
  event.preventDefault()
  const y = document.getElementById(id).offsetTop
  window.scroll({ top: y - 65, behavior: "smooth" })
}
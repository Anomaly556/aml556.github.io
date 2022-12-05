var date = new Date();
var day = date.getDate();
var year = date.getFullYear();
var month = date.getMonth();
let myDay = document.getElementById("day");
let myTime = document.getElementById("time");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
var monthLables = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let weekDay = date.getDay();
var WeekLables = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wendesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var daymark = "<sub>th</sub> ";
function myDate() {
  switch (day) {
    case 1:
      daymark = "<sub>st</sub> ";
      break;
    case 2:
      daymark = "<sub>nd</sub> ";
    case 3:
      daymark = "<sub>rd</sub> ";
      break;
    default:
      daymark = "<sub>th</sub> ";
      break;
  }
  myDay.innerHTML = `${WeekLables[weekDay]}  ${monthLables[month]} ${day} ${daymark}  ${year}`;
}

myDate();
setInterval(() => {
  let hour =
    new Date().getHours() < 10
      ? `0${new Date().getHours()}`
      : new Date().getHours();
  let minute =
    new Date().getMinutes() < 10
      ? `0${new Date().getMinutes()}`
      : new Date().getMinutes();
  let second =
    new Date().getSeconds() < 10
      ? `0${new Date().getSeconds()}`
      : new Date().getSeconds();
  seconds.style.animation = "rotate .5s infinite alternate";
  seconds.textContent = second;
  minutes.textContent = minute;
  hours.textContent = hour;
}, 1000);



/************************* */
let body = document.querySelector("body");
let toggle = document.getElementById("toggle");
let indicator = document.querySelector(".indicator");
indicator.addEventListener("click", function () {
  //  toggle.classList.toggle("active");
  indicator.classList.toggle("fa-moon");
  indicator.classList.toggle("fa-sun");
  body.classList.toggle("active");
});

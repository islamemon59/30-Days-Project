const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();
let data = "0"
let data2 = ""
 
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Saturday"];
const allMonths = ["Janurary","February","March","April","May","June","August","September","October","November","December"];

date.innerHTML = (today.getDate() < 10?"0":"") + today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear(); 
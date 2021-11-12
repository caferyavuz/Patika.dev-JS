let input = prompt("Adınız Nedir?");

let myName = document.querySelector("#myName");
myName.innerHTML = input;

let days = ["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"];


showTime();

setInterval(showTime,1000);

function showTime(){
    
let minutes= new Date().getMinutes();
let seconds= new Date().getSeconds();
let hours= new Date().getHours();
let day= new Date().getDay();

if(minutes < 10)
{
    minutes = "0" + minutes;
}
if(seconds < 10)
{
    seconds = "0" + seconds;
}
if(hours < 10)
{
    hours = "0" + hours;
}

let dateTime=`${hours}:${minutes}:${seconds} ${days[day-1]}`

let myClock = document.querySelector("#myClock");
myClock.innerHTML=dateTime;
}
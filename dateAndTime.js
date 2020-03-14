const dateValue=document.getElementById("date");
const timeValue=document.getElementById("time");

function getTime(){
  const date=new Date();

  var minutes=date.getMinutes();
  var hours=date.getHours();
  var seconds=date.getSeconds();

  var amPmIndex=0;
  const amPm=['Am',  'Pm'];

  if(hours>=0  && hours<12){
    if(hours===0){
      hours=12;
    }
    amPmIndex=0;
  }else if(hours>=12 && hours<=23){
    if(hours>12){
      hours=hours-12;
    }
    amPmIndex=1;
  }

  timeValue.innerText=`${amPm[amPmIndex]} ${hours<10 ? `0${hours}` : hours} : ${minutes<10 ? `0${minutes}`: minutes} : ${seconds<10 ? `0${seconds}` : seconds}`;

  var year=date.getFullYear();
  var month=date.getMonth();
  var day=date.getDate();
  var dayLabel=date.getDay();

  const weekday=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months=['January', 'February', 'March', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  dateValue.innerText=`${weekday[dayLabel]}, ${months[month]}, ${day<10 ?  `0${day}`: day}, ${year}`;
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();
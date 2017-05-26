/* Image */ 
var images = {
  morning: "http://www.tabinotebook.com/wp-content/uploads/2017/05/P5068738.jpg",
  afternoon: "http://www.tabinotebook.com/wp-content/uploads/2017/04/P3038052.jpg",
  evening: "http://www.tabinotebook.com/wp-content/uploads/2017/02/P2147935.jpg",
  night: "http://www.tabinotebook.com/wp-content/uploads/2017/05/P5068812-1.jpg"
}

/* Set up Time */
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

function setTime(){
var time = new Date();

var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
  
minutes = ( minutes < 10 ? "0": "") + minutes;
seconds = ( seconds < 10 ? "0" : "")+ seconds;
  
var timeString = hours + ":" +  minutes + ":" + seconds;
document.getElementById("clock").firstChild.nodeValue = timeString;
  
setImage(hours);
};

/* Set up Image */
 function setImage(hours) {
  if (hours < 12 ){
    backgroundImage = images.morning;
    $(".greetings").text("Good morning! Have a nice start of a day :) ").css("color","#ea5532");
     $("#clock").css("color", "#f3a68c");
  } else if ( hours < 18) {
    backgroundImage = images.afternoon;
     $(".greetings").text("Good afternoon! How is your day? ").css("color","#009b9f");
     $("#clock").css("color", "#88bfbf");
  } else if (hours < 20){
    backgroundImage = images.evening;
     $(".greetings").text("Good evening! Are you enjoying today? ").css("color","#a50082");
     $("#clock").css("color", "#e6afcf");
  } else if (hours < 24 ){
    backgroundImage = images.night;
     $(".greetings").text("Oh..it's already late. Good night!").css("color","#e8383d");
     $("#clock").css("color", "#f19ca7");
  }
  
 $('body').css('background-image','url('+ backgroundImage +')');
}

/* Set up Greetings */
setTime();
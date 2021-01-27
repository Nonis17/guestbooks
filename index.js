var userInputName = document.querySelector('.userInputName');
var bio = document.querySelector('.bio');
var sendButton = document.querySelector('.sendButton');
var commentSection = document.querySelector('.comment-section');

//Får fram dagens datum och tid
var currentTime = new Date();
var seconds = currentTime.getSeconds();


//Skapar en ny array 
var commentsArr = new Array();

sendButton.addEventListener('click', function (event) {
  //avoid the page reload 
  event.preventDefault();

  //Ändrar om hur tiden skrivs ut i konsollen  
  time = currentTime.toLocaleString("sv-SV");

  //Lägger till en ny kommentar i array.
  //Kollar att man har fyllt i rutorna i forumläret:
  if (userInputName.value && bio.value) {
    commentsArr.push(time + ", " + userInputName.value + ": " + " " + bio.value);

    //Lägger till nya inputs i listan
    commentSection.innerHTML = "<li class=\"comment user-comment\"\>\
\<div class=\"info\"\>\
\<p class=\"title-comment\"\>" + userInputName.value + "\</p\>\
\<span\>" + time + "\<\/span\>\
\<\/div\>\
\<p class=\"bio-comment\"\>" + bio.value + "\<\/p\>\
<hr\>\
\<\/li\>" + commentSection.innerHTML;


    //Gör input-rutorna tomma när man klickat på knappen.
    userInputName.value = "";
    bio.value = "";
  }

  else {
    alert("Write your name and comment before hitting the button");
  }

});

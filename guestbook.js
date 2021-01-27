
//I denna JavaScript kod använder vi LocalStorage för att lagra input-värderna! 

var userInputName = document.querySelector('.userInputName'); 
var bio = document.querySelector('.bio');
var sendButton = document.querySelector('.sendButton');
var userOutput = document.querySelector('.userOutput');

//Får fram dagens datum och tid
var currentTime = new Date();


//Funktion för kommentera-knappen
sendButton.addEventListener('click', function() {

    //Kollar att man har fyllt i rutorna i forumläret:
    if (userInputName.value && bio.value){
        var commentEntry = {
            comment: bio.value,
            timestamp: new Date()
        }
        localStorage.setItem(userInputName.value, JSON.stringify(commentEntry));
        location.reload();
    } 
    
});

//Loopar igenom alla kommentarer:
for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i); 
    const commentEntry = JSON.parse(localStorage.getItem(key));
    const comment = commentEntry.comment;
    const timestamp = new Date(commentEntry.timestamp).toLocaleString("sv-SV");

    //Lägger in värderna i HTML koden:
    userOutput.innerHTML += `<strong>${key} </strong><br /> <em>${timestamp}</em><br /><br /> ${comment}<br /><hr>`; 
}



        
var numberOfDrums = document.querySelectorAll(".drum").length; //total number of buttons having drum class



for(var i=0; i<numberOfDrums ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var soundButton = this.innerHTML;
        
        makeSound(soundButton);               // adding event to play sound when clicked
        

        buttonAnimation(soundButton);         // adding animation to button clicked
        
       }) ;   
}


//adding event to play sound when key pressed 
document.addEventListener("keydown",function(event)
{
    makeSound(event.key);           //event.key---> this gives the keyborad key due to which event happened 

    buttonAnimation(event.key);         // adding animation to button clicked
})



//make sound when any of the things happen ------> buuton clickes or key pressed

function makeSound(Key) 
{
    switch (Key)
    {
       case 'w':
           var audio = new Audio("sounds/tom-1.mp3");
           audio.play();
           break;
       case 'a':
           var audio = new Audio("sounds/tom-2.mp3");
           audio.play();
           break;
       case 's':
           var audio = new Audio("sounds/tom-3.mp3");
           audio.play();
           break;
       case 'd':
           var audio = new Audio("sounds/tom-4.mp3");
           audio.play();
           break;
       case 'j':
           var audio = new Audio("sounds/snare.mp3");
           audio.play();
           break;
       case 'k':
           var audio = new Audio("sounds/crash.mp3");
           audio.play();
           break;
       case 'l':
           var audio = new Audio("sounds/kick-bass.mp3");
           audio.play();
           break;
       default:
           console.log(soundButton);
   }

}

function buttonAnimation(keyUsed)
{
    var activeButton= document.querySelector("."+ keyUsed);

    activeButton.classList.add("pressed");              //Putting the shadow when pressed

    setTimeout(function() {
       activeButton.classList.remove("pressed");         // this removes the pressed class after 0.1 sec of time 
    }, 100);
 
}

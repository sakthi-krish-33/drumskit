var numberOfButtons=document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);   //when we click the button something has to happen so we use event listener.

}

function handleClick() {
    //this-is used to find identity of each button
    //this.style.color="white";
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}
document.addEventListener("keypress",function(event){
    makeSound(event.key);            //which key is pressed and make sound of that event
    buttonAnimation(event.key);
});
function makeSound(key){                 //key is buttonInnerHTML
    switch (key) {
        case "w":
            var tom1=new Audio("./sounds/tom-1.mp3")
            tom1.play();

            
        break;
        case "a":
            var tom2=new Audio("./sounds/tom-2.mp3")
            tom2.play();

            
        break;
        case "s":
            var tom3=new Audio("./sounds/tom-3.mp3")
           tom3.play();

            
        break;
        case "d":
            var tom4=new Audio("./sounds/tom-4.mp3")
            tom4.play();

            
        break;
        case "j":
            var snare=new Audio("./sounds/snare.mp3")
            snare.play();

            
        break;
        case "k":
            var kickBass=new Audio("./sounds/kick-bass.mp3")
           kickBass.play();

            
        break;
        case "l":
            var crash=new Audio("./sounds/crash.mp3")
            crash.play();

            
        break;
    
        default:
            break;
    }

}
function buttonAnimation(currentkey){
    var activeAction=document.querySelector("."+currentkey);
    activeAction.classList.add("pressed");
    setTimeout(function(){
        activeAction.classList.remove("pressed");
    },100);                     //setting time interval for the transparency after 1sec it should come to its original state.
}

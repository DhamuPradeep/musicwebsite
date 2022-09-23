

function check(buttonclick){
  switch(buttonclick){
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
      case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;
      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;
      case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;

      default:
       console.log(buttonclick);
    }
}

var x = document.querySelectorAll("button")
for(var i = 0;i<x.length;i++){
  x[i].addEventListener("click",function(){
    var buttonclick = this.innerHTML;
    check(buttonclick);
    buttonanimation(buttonclick);
})
}

document.addEventListener("keypress",function(){
    check(event.key);
    buttonanimation(event.key);
})

function buttonanimation(key){
  var activekey = document.querySelector("."+key);
  activekey.classList.add("pressed");
  setTimeout(function(){
    activekey.classList.remove("pressed");
  },100)
}

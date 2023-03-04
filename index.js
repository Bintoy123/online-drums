drum = document.querySelectorAll('.drum');

document.addEventListener("keydown",function(event){
  var keys = event.key.toUpperCase()
  sound(keys);
  buttonAnimation(keys);
});
for (var i=0; i < drum.length; i++){
  drum[i].addEventListener("click",function(){
    sound(this.innerHTML);
    buttonAnimation(this.innerHTML);

  });
};

function sound(key){
  switch (key){
    case "W":
      new Audio("sounds/CyCdh_K3HfHat.wav").play();
      break;

    case "A":
      new Audio("sounds/CyCdh_K3Tom-04.wav").play();
      break;

    case "S":
      new Audio("sounds/CyCdh_K3Tom-04.wav").play();
      break;

    case "D":
      new Audio("sounds/CyCdh_K3Crash-02.wav").play();
      break;

    case "J":
      new Audio("sounds/CyCdh_K3Snr-03.wav").play();
      break;

    case "K":
      new Audio("sounds/CyCdh_K3Kick-03.wav").play();
      break;

    case "L":
      new Audio("sounds/ride_cymbal.wav").play();
      break;
    default:
      console.log("Not on the list");
  }
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

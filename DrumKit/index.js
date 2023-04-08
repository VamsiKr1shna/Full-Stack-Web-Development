const audioButtonPairs = {
  w: "tom-1.mp3",
  a: "tom-2.mp3",
  s: "tom-3.mp3",
  d: "tom-4.mp3",
  j: "snare.mp3",
  k: "crash.mp3",
  l: "kick-bass.mp3",
};

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //For Detecting button press
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    new Audio("sounds/" + audioButtonPairs[this.textContent]).play();
    buttonAnimation(this.textContent);
  });

  document
    .querySelectorAll(".drum")
    [i].addEventListener("keydown", function (event) {
      new Audio("sounds/" + audioButtonPairs[event.key]).play();
      buttonAnimation(event.key);
    });
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}

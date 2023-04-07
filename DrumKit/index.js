const audioButtonPairs = {
  w: 1,
  a: 2,
  s: 3,
  d: 4,
  j: 5,
  k: 6,
  l: 7,
};

for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    console.log(audioButtonPairs);
  });

// var audio = new Audio("sounds/tom-1.mp3");
//audio.play();

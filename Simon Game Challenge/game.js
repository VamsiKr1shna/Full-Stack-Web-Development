var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var level = 0;

$(document).keydown(function (e) { 
  nextSequnece();
});

function nextSequnece() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $("h1").text("Level "+level);
}

$(".btn").click(function (e) { 
  playSound($(this).attr("id"));
  animatePress(this);
});

function playSound(name){
  new Audio("sounds/"+name+".mp3").play();
}


function animatePress(buttonPressed){
  $(buttonPressed).addClass("pressed");
  setTimeout(() => {
    $(buttonPressed).removeClass("pressed");
  }, 100);
  
}
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$(document).keydown(function (e) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequnece();
    started = true;
  }
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
  $("h1").text("Level " + level);
}

$(".btn").click(function (e) {
  var userChosenColour = $(this).attr("id");

  playSound($(this).attr("id"));
  animatePress(this);

  userClickedPattern.push(userChosenColour);
  checkAnswer(gamePattern.length - 1);
});

// TO PLAY SOUNDS
function playSound(name) {
  new Audio("sounds/" + name + ".mp3").play();
}

//ANIMATES PRESS ACTION
function animatePress(buttonPressed) {
  $(buttonPressed).addClass("pressed");
  setTimeout(() => {
    $(buttonPressed).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    console.log("success");

    if (gamePattern.length == userClickedPattern.length)
      setTimeout(() => {
        nextSequnece();
      }, 1000);
  } else {
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  userClickedPattern=[];
  started = false;
}

let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      userClickedPattern = [];
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    let idiot = new Audio("sounds/wrong.mp3");
    idiot.play();

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    gamePattern = [];
    userClickedPattern = [];
    level = [];
  }
}

$(document).keypress(function () {
  if (gamePattern.length == 0) {
    nextSequence();
    userClickedPattern = [];
  }
});

function playSound(name) {
  let gameAudio = new Audio("sounds/" + name + ".mp3");
  gameAudio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

$(".btn").click(function (event) {
  userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
  level++;
  if (level > 0) {
    $("#level-title").text("Level " + level);
  }

  let randomNumber = Math.floor(Math.random() * 4);

  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
  //console.log(gamePattern);
}

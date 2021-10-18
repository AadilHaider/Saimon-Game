console.log("Hello World");
let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedColour = [];

function nextSequence() {
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeOut(50)
    .fadeIn(50)
    .fadeOut(50)
    .fadeIn(50);

  switch (randomChosenColour) {
    case "red":
      let red = new Audio("sounds/red.mp3");
      red.play();
      break;
    case "green":
      let green = new Audio("sounds/green.mp3");
      green.play();
      break;
    case "blue":
      let blue = new Audio("sounds/blue.mp3");
      blue.play();
      break;
    case "yellow":
      let yellow = new Audio("sounds/yellow.mp3");
      yellow.play();
      break;
  }
}

$(document).keypress(function () {
  if (gamePattern.length == 0) {
    nextSequence();
    console.log("got the keypress");
  }
});

function userClicks(clickColour) {
  // roboGenLen = gamePattern.length + 1;
  // console.log(roboGenLen);

  // if (roboGenLen === userClickedColour.length) {
  //   console.log("Reached robo eqation");
  //   userClickedColour = [];
  //   console.log(userClickedColour);
  // } else {
  console.log("clickcolour function");
  userClickedColour.push(clickColour);
  console.log(userClickedColour);
  if (gamePattern.length == userClickedColour.length) {
    // to halt the checking process until teh entire sequence is written
    if (JSON.stringify(gamePattern) === JSON.stringify(userClickedColour)) {
      if (gamePattern.length == userClickedColour.length) {
        console.log("Reached robo eqation");
        userClickedColour = [];
        console.log(userClickedColour);
      }
      nextSequence();
      console.log(gamePattern);
    } else {
      let idiot = new Audio("sounds/wrong.mp3");
      idiot.play();
      userClickedColour = [];
    }
  }
  for (let i = 0; i < gamePattern.length--; i++) {
    if (gamePattern[i] === userClickedColour[i]) {
    }
  }
}

$("#red").click(function () {
  userClicks("red");
  $("#red");
});

$("#green").click(function () {
  userClicks("green");
});

$("#blue").click(function () {
  userClicks("blue");
});

$("#yellow").click(function () {
  userClicks("yellow");
});

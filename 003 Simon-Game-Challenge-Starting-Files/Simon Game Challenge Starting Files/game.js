var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);
  console.log(gamePattern); // Log the game pattern to see the output
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  console.log(userChosenColour); // Log the user chosen colour to see the output
});

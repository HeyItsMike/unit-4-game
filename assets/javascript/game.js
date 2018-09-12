// game objective: click any of 4 crystals to add points to users score
// user objective is to click crystals in correct (random) order to match "user score" to the computers random generated number
// if user matches score to computers number it counts as a "win" and the game starts over
// if user cannot match computers number within allowed number of attempts then it counts as a "loss" and the game starts over

// create game with 4 crystals
// crystasls each have random number assigned each game
// new random number is generated every new game (win or lose)
// when clicking random crystal the random number assigned to that crystal is applied to users current score
// each time a crystal is clicked the number of "attempts" decreases by one
// win or loss is decided by "user score" after all "attemps" havce been exhausted and if it matches computers number or not

var randomResult;
var loss = 0;
var win = 0;
var previous = 0;


var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        '/assets/images/bluecrystal.jpg', 
        '/assets/images/greencrystal.jpg', 
        '/assets/images/purplecrystal2.jpg', 
        '/assets/images/redcrystal.jpg'];

    randomResult = Math.floor(Math.random() * 101) + 19;

    $("#result").html('Random Result: ' + randomResult);

    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
            "background-size":"cover"
        });
        //crystal.html(random); //This is the line that displays number in top left corner, remove when complete

        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score: " + previous);

}

resetAndStart();


$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;


$("#previous").html("Total Score: " + previous);

    console.log(previous);

    if (previous > randomResult) {
        loss++;

        $("#loss").html("You lost: " + loss);

        previous = 0;


        resetAndStart();

    }
    else if (previous === randomResult) {
        win++;

        $("#win").html("You won: " + win);


        previous = 0;

        resetAndStart();

    }

});
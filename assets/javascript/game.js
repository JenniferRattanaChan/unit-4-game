$(document).ready(function () {

    var randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
    $("#randomNumber").text(randomNumber);
    console.log(randomNumber);

    var redGem = Math.floor(Math.random() * 12) + 1;
    var pinkGem = Math.floor(Math.random() * 12) + 1;
    var silverGem = Math.floor(Math.random() * 12) + 1;
    var yellowGem = Math.floor(Math.random() * 12) + 1;

    var wins = 0;
    var losses = 0;
    var yourPoints = 0;
    $("#yourTotal").text(yourPoints);

    function win() {
        wins++;
        $("#numberWins").text(wins);
        reset();
    }

    function lose() {
        losses++;
        $("#numberLosses").text(losses);
        reset();
    }

    $("#choiceOne").on("click", function () {
        yourPoints = yourPoints + redGem
        $("#yourTotal").text(yourPoints);
        if (yourPoints === randomNumber) {
            win();
            alert("You win!");
            reset();
        } else if (yourPoints > randomNumber) {
            lose();
            alert("You lose!");
            reset();
        }
    });

    $("#choiceTwo").on("click", function () {
        yourPoints = yourPoints + pinkGem
        $("#yourTotal").text(yourPoints);
        if (yourPoints === randomNumber) {
            win();
            alert("You win!");
            reset();

        } else if (yourPoints > randomNumber) {
            lose();
            alert("You lose!");
            reset();
        }
    });

    $("#choiceThree").on("click", function () {
        yourPoints = yourPoints + silverGem
        $("#yourTotal").text(yourPoints);
        if (yourPoints === randomNumber) {
            win();
            alert("You win!");
            reset();

        } else if (yourPoints > randomNumber) {
            lose();
            alert("You lose!");
            reset();
        }
    });

    $("#choiceFour").on("click", function () {
        yourPoints = yourPoints + yellowGem
        $("#yourTotal").text(yourPoints);
        if (yourPoints === randomNumber) {
            win();
            alert("You win!");
            reset();
            

        } else if (yourPoints > randomNumber) {
            lose();
            alert("You lose!");
            reset();
        }
    });

    function reset() {
        randomNumber = Math.floor(Math.random() * 101 + 19);
        console.log(randomNumber)
        $("#randomNumber").text(randomNumber);
        var redGem = Math.floor(Math.random() * 12) + 1;
        var pinkGem = Math.floor(Math.random() * 12) + 1;
        var silverGem = Math.floor(Math.random() * 12) + 1;
        var yellowGem = Math.floor(Math.random() * 12) + 1;
        yourPoints = 0;
        $("#yourTotal").text(yourPoints);
    }

});

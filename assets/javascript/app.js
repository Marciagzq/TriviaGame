//Simple welcome alert
alert("Ready to proof how much do you know about the World Cups?");

//Time variables 
var timerNumber = 120;
var converted = timeConverter(timerNumber);
var setIntervalHandler;



//this function displays the time with minutes and seconds, exactly like a clock
function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    } if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    } return minutes + ":" + seconds;
}

//this function helps decrementing the time per second
function decrement() {
    timerNumber--
    if (timerNumber == 0) {
        timeStop()
    }
}

// This function is call whenever time has end and displays hidden answers elements & functions
function timeStop() {
    clearInterval(setIntervalHandler);
    $("#container").hide();

    var correct = answers(".correct");
    var incorrect = answers(".incorrect");
    var unanswer = 8 - (correct + incorrect);

    $("#cointainer-Answers").show();
    $("#correct-Answers").append(correct); 
    $("#incorrect-Answers").append(incorrect); 
    $("#unanswers").append(unanswer); 
}

//this functions checks and adds our answers wether correct, incorrect or unanswered.
function answers(myClass) {
    var generalAnswers = 0;
    $(myClass).each(function () {
        var checked = $(this).is(':checked');
        if (checked) {
            generalAnswers++;
        }
    });
    return generalAnswers;
}


// *****************JQUERY*************************//
$(document).ready(function () {

    
    $("#cointainer-Answers").hide();
    $("#timer").text(converted);
    setIntervalHandler = setInterval(function () {
        decrement();
        $("#timer").text(timeConverter(timerNumber));
    }, 1000);
    
    $(".submit").click(function() {
        timeStop();
      });
});






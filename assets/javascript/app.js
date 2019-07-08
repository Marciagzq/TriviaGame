//
var timerNumber = 5;
var converted = timeConverter(timerNumber);
var setIntervalHandler;

//

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

//
function decrement() {
    timerNumber--
    if (timerNumber == 0) {
        timeStop()
    }
}

//
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

    //
    $("#cointainer-Answers").hide();

    $("#timer").text(converted);
    setIntervalHandler = setInterval(function () {
        decrement();
        $("#timer").text(timeConverter(timerNumber));
    }, 1000);

});






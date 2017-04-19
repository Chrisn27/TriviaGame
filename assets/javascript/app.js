window.onload = function() {


$("#start").click(trivia.start);

};

var intervalId

var questions = [{
  q: "What season did the Red Wedding occur in Game of Thrones?",
  answers: ["1", "5", "3", "6"],
  solve: "3"
},
{
  q: "What is the sigil of House Stark?",
  answers: ["Dragons", "Dire Wolf", "Stag", "Kraken"],
  solve: "Dire Wolf"
},
{
  q: "How did you feel when Joffrey died?",
  answers: ["Happy", "Sad", "Aroused", "Angry"],
  solve: "Happy"
}]

var guess = ""

var trivia = {

	gameTime: 7,
	unanswered: 0,
	correct: 0,
	wrong: 0,

    // starts timer at 120
	start: function() {

    intervalId = setInterval(trivia.count, 1000);

    $("#start").attr("disabled", "disabled");
    $("#start").css("opacity", "1.0");


    for (var i = 0; i < questions.length; i++) {

        $("#gameQuestions").append(questions[i].q);

                $("#gameQuestions").append("<form>");
                $("#gameQuestions").append("<br>");

                for (var j = 0; j < questions[i].answers.length; j++) {

                //var triviaAnswers = $("<label>");

                $("#gameQuestions").append('<form><p><input type="radio" name="ans">' + questions[i].answers[j] + '</p></form>');    

                }

                $("#gameQuestions").append("</form>");
            
            $("#gameQuestions").append("<br>");

    if (questions[i].solve === guess) {
        trivia.correct++;
    } else if (guess === null) {
        trivia.unanswered++;
    } else {
        trivia.wrong++;
    }
        }

    var submit = $("<button>");
    submit.text("Submit");
    submit.addClass("btn");
    submit.addClass("btn-default");
    $("#gameQuestions").append(submit);

  },

    // counts down from 120 by seconds
    count: function() {

    trivia.gameTime--;

    $("#start").html(trivia.gameTime);
    $("#start").css("color", "orange");

    if (trivia.gameTime <= 60) {
        $("#start").css("color", "yellow");
    }

    if (trivia.gameTime <= 30) {
        $("#start").css("color", "red");
    }

    // loss condition if they run out of time, will call a function to compute score
    if (trivia.gameTime <= 0) {
        clearInterval(intervalId);
        //alert("Time's up!")
    }

  },
}

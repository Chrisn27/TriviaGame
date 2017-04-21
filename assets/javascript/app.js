window.onload = function() {

$("#start").click(trivia.start);
$("table").hide();

};

var intervalId

var questions = [{
  q: "What season did the Red Wedding occur in Game of Thrones?",
  answers: ["1", "5", "3", "6"],
  ans: "3"
},
{
  q: "What is the sigil of House Stark?",
  answers: ["Dragons", "Dire Wolf", "Stag", "Kraken"],
  ans: "Dire Wolf"
},
{
  q: "How did you feel when Joffrey died?",
  answers: ["Happy", "Sad", "Elated", "Angry"],
  ans: "Happy"
},
{
  q: "What do you seek?",
  answers: ["Fire", "Blood", "Vengeance", "Honor"],
  ans: "Vengeance"
},
{
  q: "Who is your favorite character?",
  answers: ["Jaime", "Jon", "Daenerys", "Ned"],
  ans: "Jaime"
}]

var guess;
var trivia = {

	gameTime: 60,
	unanswered: 0,
	correct: 0,
	wrong: 0,

    // starts timer at 120
	start: function() {

    intervalId = setInterval(trivia.count, 1000);

    $("#start").attr("disabled", "disabled");
    $("#start").css("opacity", "1.0");
    $("table").show();


    for (var i = 0; i < questions.length; i++) {

      $("#gameQuestions").append("<h3 class='triviaThing'>" + questions[i].q + "</h3>");
      $("#gameQuestions").append("<h4><input type='radio'" + "name=x" + [i] + " value= " + questions[i].answers[0] + ">" + questions[i].answers[0] + "</h4>"
                               + "<h4><input type='radio'" + "name=x" + [i] + " value= " + questions[i].answers[1] + ">" + questions[i].answers[1] + "</h4>"
                               + "<h4><input type='radio'" + "name=x" + [i] + " value= " + questions[i].answers[2] + ">" + questions[i].answers[2] + "</h4>"
                               + "<h4><input type='radio'" + "name=x" + [i] + " value= " + questions[i].answers[3] + ">" + questions[i].answers[3] + "</h4>");

        if (guess === questions[i].ans) {
            trivia.correct++;
        } else if (guess === null) {
            trivia.unanswered++;
        } else {
            trivia.wrong++;
        }
    }

    $("#gameQuestions").append("<br>");

    var submit = $("<button>");
    submit.text("Submit");
    submit.addClass("btn");
    submit.addClass("btn-primary");
    submit.addClass("submit");
    $("#gameQuestions").append(submit);

  },

    // counts down from 120 by seconds
    count: function() {

    trivia.gameTime--;

    $("#start").html(trivia.gameTime);
    $("#start").css("color", "orange");
    $("#start").css("background-color", "blue");

    if (trivia.gameTime <= 40) {
        $("#start").css("color", "yellow");
        $("#start").css("background-color", "purple");
    }

    if (trivia.gameTime <= 20) {
        $("#start").css("color", "red");
        $("#start").css("background-color", "green");
    }

    // loss condition if they run out of time, will call a function to compute score
    if (trivia.gameTime <= 0) {
        clearInterval(intervalId);
        //alert("Time's up!")
    }

  },
}

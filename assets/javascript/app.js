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
  answers: ["Dragons", "Wolf", "Stag", "Kraken"],
  ans: "Wolf"
},
{
  q: "How did you feel when Joffrey died?",
  answers: ["Happy", "Sad", "Aroused", "Angry"],
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

var trivia = {

// guesses = $('input[name=x0]:checked', '#gameQuestions').val()

	gameTime: 45,
	unanswered: 5,
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

    }

    $("#gameQuestions").append("<br>");


    var submit = $("<button>");
    submit.text("Submit");
    submit.addClass("btn");
    submit.addClass("btn-primary");
    submit.addClass("submit");
    $("#gameQuestions").append(submit);

    submit.click(function() {
    trivia.score();
    })

},

    score: function() {
    
    var x0 = $('input[name=x0]:checked', '#gameQuestions').val();
    var x1 = $('input[name=x1]:checked', '#gameQuestions').val();
    var x2 = $('input[name=x2]:checked', '#gameQuestions').val();
    var x3 = $('input[name=x3]:checked', '#gameQuestions').val();
    var x4 = $('input[name=x4]:checked', '#gameQuestions').val();
    var empty = $('input', '#gameQuestions')

    if (x0 === questions[0].ans) {
        trivia.correct++;
        trivia.unanswered--;
    }

    else if (x0 != questions[0].ans) {
        trivia.wrong++;
        trivia.unanswered--;
    }

    if (x1 === questions[1].ans) {
        trivia.correct++;
        trivia.unanswered--;
    }

    else if (x1 != questions[1].ans) {
        trivia.wrong++;
        trivia.unanswered--;
    }

    if (x2 === questions[2].ans) {
        trivia.correct++;
        trivia.unanswered--;
    }

    else if (x2 != questions[2].ans) {
        trivia.wrong++;
        trivia.unanswered--;
    }

    if (x3 === questions[3].ans) {
        trivia.correct++;
        trivia.unanswered--;
    }

    else if (x3 != questions[3].ans) {
        trivia.wrong++;
        trivia.unanswered--;
    }

    if (x4 === questions[4].ans) {
        trivia.correct++;
        trivia.unanswered--;
    }

    else if (x4 != questions[4].ans) {
        trivia.wrong++;
        trivia.unanswered--;
    }

    clearInterval(intervalId);
    $("#playerScore").html("<h3>You got " + trivia.correct + " questions right!" + "</h3>"
                         + "<h3>You got " + trivia.wrong + " questions wrong" + "</h3>"
                         + "<h3>You failed to answer " + trivia.unanswered + "</h3>");

    },


    // counts down from 120 by seconds
    count: function() {

    trivia.gameTime--;

    $("#start").html(trivia.gameTime);
    $("#start").css("color", "orange");
    $("#start").css("background-color", "blue");

    if (trivia.gameTime <= 30) {
        $("#start").css("color", "yellow");
        $("#start").css("background-color", "purple");
    }

    if (trivia.gameTime <= 15) {
        $("#start").css("color", "red");
        $("#start").css("background-color", "green");
    }

    // loss condition if they run out of time, will call a function to compute score
    if (trivia.gameTime <= 0) {
        clearInterval(intervalId);
        trivia.score();
        //alert("Time's up!")
    }

  },
}

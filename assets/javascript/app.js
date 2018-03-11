$(document).ready(function() {
    $("#quest1").hide();
    $("#quest2").hide();
    $("#quest3").hide();
    $("#quest4").hide();
    $("#quest5").hide();
    $("#quest6").hide();
    $("#quest7").hide();
    $("#quest8").hide();
    $("#quest9").hide();
    $("#quest10").hide();
    $("#gameOver").hide();

    // $(".clockContainer").hide();

    var correctAnswerCount= 0;
    var wrongAnswerCount= 0;
    var downloadTimer;
//Game starts with a start button. This needs to be a function
function gameStart () {
    $("#gameOver").hide("fast", function() {
        $("#startScreen").css("display", "block");
        $("#clock").css("display", "none");
        correctAnswerCount= 0;
            $(".numCorrect").text(correctAnswerCount);
        wrongAnswerCount= 0;
            $(".numWrong").text(wrongAnswerCount);
        
    });
    
};
//Timer starts with 30 secs/ displays new question and list of answers.
function gameTimer() {
    var timeLeft = 30;
    downloadTimer = setInterval(function(){
    timeLeft--;
    $("#countdowntimer").text(timeLeft)
    if (timeLeft == 0) {
        wrongAnswerCount++;
        $(".numWrong").text(wrongAnswerCount,"");
        showReveal();
        $("#reveal").text("TIMES UP! No answer is a Wrong Answer, click Submit to go to the next question.");
       
        
    }
    if(timeLeft <= 0)

        clearInterval(downloadTimer);
    },1000);
    
};
// Stop Time Function
function stopTime() {
    clearInterval(downloadTimer);
};

function showReveal() {
    $("#reveal").css("display", "block");
}
  
        $("#startButton").on("click", function() {
                
                $("#startScreen").hide("fast", function() {
                        gameTimer();
                        $("#clock").css("display", "block");
                        $("#quest1").css("display", "block");
                        $("#submit").on("click.submit", function() {
                        stopTime();

                            var answer= $("input:radio[name=answer]:checked").val();
                            var correctAnswer = $("label[for='answer3-1']").text();    

                        if (answer === "nont") {
                            wrongAnswerCount++;
                            $(".numWrong").text(wrongAnswerCount,"");
                            $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                           
                        };
                        if (answer === "ist") {
                            correctAnswerCount++
                            $(".numCorrect").text(correctAnswerCount,"");
                            $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                    
                        };

                        $("#submit").off("click.submit");
                        
                        function nextTimer() {
                            $("#quest1").hide("fast", function() {
                                
                            
                                $("#quest2").css("display", "block");
                                $("#quest2").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                        setTimeout(nextTimer, 3000);                    
                    }); 
                
                     

                    $("#submit2").on("click.submit2", function() {
                        stopTime();
                        
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer2-2']").text();

                            // if (timeLeft == 0) {
                            //     wrongAnswerCount++;
                            //     $("#reveal").text("TIMES UP! No answer is a Wrong Answer, click Submit to go to the next question.");
                            //     setTimeout(nextTimer, 3000);
                            // }
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }

                            $("#submit2").off("click.submit2");

                        function nextTimer() {
                            $("#quest2").hide("fast", function() {
                               
                            
                                $("#quest3").css("display", "block");
                                $("#quest3").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                        setTimeout(nextTimer, 3000);    
                    });
                
                    $("#submit3").on("click.submit3", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer1-3']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }

                            $("#submit3").off("click.submit3");

                        function nextTimer() {
                            $("#quest3").hide("fast", function() {
                            
                                $("#quest4").css("display", "block");
                                $("#quest4").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    }); 

                    $("#submit4").on("click.submit4", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer4-4']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit4").off("click.submit4");

                        function nextTimer() {
                            $("#quest4").hide("fast", function() {
                            
                                $("#quest5").css("display", "block");
                                $("#quest5").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });
                    
                    $("#submit5").on("click.submit5", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer3-5']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit5").off("click.submit5");

                        function nextTimer() {
                            $("#quest5").hide("fast", function() {
                            
                                $("#quest6").css("display", "block");
                                $("#quest6").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });

                    $("#submit6").on("click.submit6", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer3-6']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit6").off("click.submit6");

                        function nextTimer() {
                            $("#quest6").hide("fast", function() {
                            
                                $("#quest7").css("display", "block");
                                $("#quest7").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });

                    $("#submit7").on("click.submit7", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer4-7']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit7").off("click.submit7");

                        function nextTimer() {
                            $("#quest7").hide("fast", function() {
                            
                                $("#quest8").css("display", "block");
                                $("#quest8").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });

                    $("#submit8").on("click.submit8", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer2-8']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit8").off("click.submit8");

                        function nextTimer() {
                            $("#quest8").hide("fast", function() {
                            
                                $("#quest9").css("display", "block");
                                $("#quest9").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });

                    $("#submit9").on("click.submit9", function() {
                        stopTime();
                        setTimeout(nextTimer, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer3-9']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit9").off("click.submit9");

                        function nextTimer() {
                            $("#quest9").hide("fast", function() {
                            
                                $("#quest10").css("display", "block");
                                $("#quest10").show();
                                $("#reveal").css("display", "none");
                                gameTimer();
                            });                       
                        };
                    });

                    $("#submit10").on("click.submit10", function() {
                        stopTime();
                        setTimeout(endGame, 3000);
                        var answer= $("input:radio[name=answer]:checked").val();
                        var correctAnswer = $("label[for='answer3-10']").text();
                        
                            if (answer === "nont"){
                                wrongAnswerCount++;
                                $(".numWrong").text(wrongAnswerCount,"");
                                showReveal()
                                $("#reveal").text("Wrong, the correct answer is: " + correctAnswer);
                            }
                            if (answer === "ist") {
                                correctAnswerCount++
                                $(".numCorrect").text(correctAnswerCount,"");
                                showReveal()
                                $("#reveal").text("You got it! The correct answer is: " + correctAnswer);
                            }
                            $("#submit10").off("click.submit10");

                        function endGame() {
                            $("#quest10").hide("fast", function() {
                            
                                $("#gameOver").css("display", "block");
                                $("#gameOver").show();
                                $("#reveal").css("display", "none");
                                
                                
                            });                       
                        };
                        
                        $("#endGame").on("click", function() {
                            gameStart();

                        });
                    });                   
     //These are for main game function at top.       
            });
        });
       
     //Do not touch these!!           
});

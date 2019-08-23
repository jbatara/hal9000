$(document).ready(function() {
  $(".hello").show();
  setTimeout(function(){
    $(".hello").removeClass("cursor");
    $(".question").addClass("cursor");
    $(".question").show();
    setTimeout(function(){
      $("form").show();
    }, 3000);
  }, 3000);


  $("form").submit(function(event) {

    event.preventDefault();
    var userInput = $("[name=number]").val();
    var answer = numberQuery(userInput);
    answer.forEach(function(number,i){
        $(".answer").append("<p>" + number + "</p>");
    });
    $(".answer").show();
    $(".question").hide();
  });
});


function allNumbers(number){
  var answer = [];
  number = parseInt(number);
  for(var i=0; i<=number; i++){
    answer.push(String(i));
  }
  return answer;
}


function numberQuery(number) {
  var answer = [];
  var userNumbers = allNumbers(number);

  for (var i=0; i < userNumbers.length; i++) {
    if (userNumbers[i].includes("3")) {
      answer.push(i + ": I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (userNumbers[i].includes("2")) {
      answer.push(i + ": Boop!");
    } else if (userNumbers[i].includes("1")) {
      answer.push(i + ": Beep!");
    } else {
      answer.push(userNumbers[i]);
    }
  }
  return answer;
}

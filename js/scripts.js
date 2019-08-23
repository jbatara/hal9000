$(document).ready(function() {
  setTimeout(function() {
    $(".userName").show();
  }, 2000);

  $(".userName").submit(function() {
    event.preventDefault();
    var userName = $(".userName input").val();
    $(".userName").hide();
    $(".hello").append(userName + ".");
    $(".hello").addClass("cursor");
    setTimeout(function() {
      removeCursor($(".hello"));
      $(".question").addClass("cursor");
      $(".question").append(userName + "?");
      $(".question").show();
      setTimeout(function() {
        $(".number").show();
      }, 4000);
    }, 3000);
  });


  $("input.number").click(function(event) {
    removeCursor($(".question"));
  });

  $("form.number").submit(function(event) {

    event.preventDefault();
    var userInput = $("[name=number]").val();
    var answer = numberQuery(userInput);
    $(".hello, .question, .number").hide();
    answer.forEach(function(number, i) {
      $(".answer").append("<p>" + number + "</p>");
    });
    $(".answer").show();
  });
});


function allNumbers(number) {
  var answer = [];
  number = parseInt(number);
  for (var i = 0; i <= number; i++) {
    answer.push(String(i));
  }
  return answer;
}


function numberQuery(number) {
  var answer = [];
  var userNumbers = allNumbers(number);

  for (var i = 0; i < userNumbers.length; i++) {
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

function removeCursor(element) {
  element.removeClass("cursor");
  element.css("display", "block");
}

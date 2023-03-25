console.log("Client JS loaded");

$(document).ready(function () {
  console.log("JQ loaded");
  getScore();
  getTime();
  //globals
  let isRunning = false;
  //event listeners
  $("button").on("click", buttonDelineator);
  $(".button");

  //functions
  function buttonDelineator() {
    switch ($(this).text()) {
      case "-3":
        if ($(this).is("button:contains(-3):lt(1)")) {
          var home = -3;
          var away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = -3;
          updateScore(home, away);
        }
        break;
      case "-2":
        if ($(this).is("button:contains(-2):lt(1)")) {
          home = -2;
          away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = -2;
          updateScore(home, away);
        }
        break;
      case "-1":
        if ($(this).is("button:contains(-1):lt(1)")) {
          home = -1;
          away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = -1;
          updateScore(home, away);
        }
        break;
      case "+1":
        if ($(this).is("button:contains(+1):lt(1)")) {
          home = 1;
          away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = 1;
          updateScore(home, away);
        }
        break;
      case "+2":
        if ($(this).is("button:contains(+2):lt(1)")) {
          home = 2;
          away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = 2;
          updateScore(home, away);
        }
        break;
      case "+3":
        if ($(this).is("button:contains(+3):lt(1)")) {
          home = 3;
          away = 0;
          updateScore(home, away);
        } else {
          home = 0;
          away = 3;
          updateScore(home, away);
        }
        break;
      case "Set Timer to 60 Seconds":
        setTimer();
        break;
      case "Start Timer":
        startTimer();
        break;
      case "Stop Timer":
        stopTimer();
        break;
      default:
        console.log("nothing happening");
    }
  }
  function updateScore(home, away) {
    let homeScore = home;
    let awayScore = away;
    let scoreChange = {
      home: homeScore,
      away: awayScore,
    };
    console.log("scoreChange is", scoreChange);
    $.ajax({
      method: "POST",
      url: "/score",
      data: scoreChange,
      success: function (response) {
        console.log("successful put:", response);
        getScore();
      },
    });
  }
  function getScore() {
    $.ajax({
      method: "GET",
      url: "/score",
      success: function (response) {
        console.log("successful get:", response);
        displayScore(response);
      },
    });
  }
  function displayScore(response) {
    console.log(response);
    $(".col-xs-4").slice(3, 4).text(response.home);
    $(".col-xs-4").slice(5, 6).text(response.away);
  }
  function setTimer() {
    $("h2 div:nth-child(2)").text(60);
  }
  function startTimer() {
    let seconds = $("h2 div:nth-child(2)").text();
    isRunning = true;
    var timer = setInterval(function () {
      if (isRunning) {
        if (seconds > 0) {
          seconds--;
          $("h2 div:nth-child(2)").text(seconds);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);
  }
  function stopTimer() {
    let seconds = $("h2 div:nth-child(2)").text();
    isRunning = false;
    updateTime(seconds);
  }
  function updateTime(currentTime) {
    let seconds = currentTime;
    let remainingTime = {
      seconds: seconds,
    };
    console.log("remaining time is", remainingTime);
    $.ajax({
      method: "POST",
      url: "/time",
      data: remainingTime,
      success: function (response) {
        console.log("successful put:", response);
      },
    });
  }
  function getTime() {
    $.ajax({
      method: "GET",
      url: "/time",
      success: function (response) {
        console.log("successful get:", response);
        displayTime(response);
      },
    });
  }
  function displayTime(response) {
    console.log(response);
    $("h2 div:nth-child(2)").text(response.seconds);
  }
});

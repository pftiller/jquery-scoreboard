console.log('Client JS loaded');

$(document).ready(function(){
    console.log('JQ loaded');
    getScore();
    //globals


    //event listeners
    $('button').on('click', buttonDelineator);
    $('.button')




    //functions
    function buttonDelineator() {
        switch($(this).text()) {
        case '-3':
            if($(this).is('button:contains(-3):lt(1)')) {
                var home = -3;
                var away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = -3;
                updateScore(home,away);
            }
            break;
        case '-2':
            if($(this).is('button:contains(-2):lt(1)')) {
                home = -2;
                away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = -2;
                updateScore(home,away);
            }
            break;
        case '-1':
            if($(this).is('button:contains(-1):lt(1)')) {
                home = -1;
                away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = -1;
                updateScore(home,away);
            }
            break;
        case '+1':
            if($(this).is('button:contains(+1):lt(1)')) {
                home = 1;
                away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = 1;
                updateScore(home,away);
            }
            break;
        case '+2':
            if($(this).is('button:contains(+2):lt(1)')) {
                home = 2;
                away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = 2;
                updateScore(home,away);
            }
            break;
        case '+3':
            if($(this).is('button:contains(+3):lt(1)')) {
                home = 3;
                away = 0;
                updateScore(home,away);
            }
            else {
                home = 0;
                away = 3;
                updateScore(home,away);
            }
            break;
        default:
            console.log('nothing happening');
        }
    }
    function updateScore(home, away) {
        let homeScore = home;
        let awayScore = away;
        let scoreChange = {
            home: homeScore,
            away: awayScore
        };
        console.log('scoreChange is', scoreChange);
        $.ajax({
            method: 'POST',
            url: '/score',
            data: scoreChange,
            success: function( response ){
                console.log( 'successful put:', response );
               getScore();
            }
        });
    } 

    function getScore() {
        $.ajax({
            method: 'GET',
            url: '/score',
            success: function( response ){
                console.log( 'successful get:', response );
                displayScore(response);
            }
        });
    }
    function displayScore(response) {
        console.log(response);
        $('.col-xs-4').slice(3,4).text(response.home);
        $('.col-xs-4').slice(5,6).text(response.away);
    }

});
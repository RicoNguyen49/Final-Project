$(document).ready(function () {
    var x = "X";
    var o = "O";
    var turns = 0;


    //board
    var winnerBanner = $('#winner-banner');

    function displayWinner(winner) {
        $('#winner-banner').text('Winner: ' + winner).slideDown(200);
    }


    var square1 = $('#square1');
    var square2 = $('#square2');
    var square3 = $('#square3');
    var square4 = $('#square4');
    var square5 = $('#square5');
    var square6 = $('#square6');
    var square7 = $('#square7');
    var square8 = $('#square8');
    var square9 = $('#square9');


    // check to see if 0 has winning positions
    $('#board li').on('click', function () {
        if (square1.hasClass('o') && square2.hasClass('o') && square3.hasClass('o') || //horizontal win
            square4.hasClass('o') && square5.hasClass('o') && square6.hasClass('o') ||//horizontal win
            square7.hasClass('o') && square8.hasClass('o') && square9.hasClass('o') ||//horizontal win
            square1.hasClass('o') && square4.hasClass('o') && square7.hasClass('o') || //vertical win
            square2.hasClass('o') && square5.hasClass('o') && square8.hasClass('o') ||//vertical win
            square3.hasClass('o') && square6.hasClass('o') && square9.hasClass('o') ||//vertical win
            square1.hasClass('o') && square5.hasClass('o') && square9.hasClass('o') || //diagonal win
            square3.hasClass('o') && square5.hasClass('o') && square7.hasClass('o')//diagonal win
        ) { //alert 0 won the game
            displayWinner('O');
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        // check to see if x has winning positions
        else if (square1.hasClass('x') && square2.hasClass('x') && square3.hasClass('x') || //horizontal win
            square4.hasClass('x') && square5.hasClass('x') && square6.hasClass('x') ||//horizontal win
            square7.hasClass('x') && square8.hasClass('x') && square9.hasClass('x') ||//horizontal win
            square1.hasClass('x') && square4.hasClass('x') && square7.hasClass('x') || //vertical win
            square2.hasClass('x') && square5.hasClass('x') && square8.hasClass('x') ||//vertical win
            square3.hasClass('x') && square6.hasClass('x') && square9.hasClass('x') ||//vertical win
            square1.hasClass('x') && square5.hasClass('x') && square9.hasClass('x') || //diagonal win
            square3.hasClass('x') && square5.hasClass('x') && square7.hasClass('x') //diagonal win
        ) {
            // alert x won the game
            displayWinner('X');
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
        }
        // tie game
        else if (turns == 9) {
            displayWinner('Tie Game');
            $('#board li').text('');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
        }
        // square already in use
        else if ($(this).hasClass('disable')) {
            alert('This spot is already filled');
        }
        // turn has been taken
        else if (turns % 2 == 0) {
            turns++;
            $(this).text(o);
            $(this).addClass('disable o');
            if (square1.hasClass('o') && square2.hasClass('o') && square3.hasClass('o') || //horizontal win
                square4.hasClass('o') && square5.hasClass('o') && square6.hasClass('o') ||//horizontal win
                square7.hasClass('o') && square8.hasClass('o') && square9.hasClass('o') ||//horizontal win
                square1.hasClass('o') && square4.hasClass('o') && square7.hasClass('o') || //vertical win
                square2.hasClass('o') && square5.hasClass('o') && square8.hasClass('o') ||//vertical win
                square3.hasClass('o') && square6.hasClass('o') && square9.hasClass('o') ||//vertical win
                square1.hasClass('o') && square5.hasClass('o') && square9.hasClass('o') || //diagonal win
                square3.hasClass('o') && square5.hasClass('o') && square7.hasClass('o')//diagonal win
            ) {
                displayWinner('O');
                turns = 0;
            }
        }
            else {
                turns++;
                $(this).text(x);
                $(this).addClass('disable x');
                if (square1.hasClass('x') && square2.hasClass('x') && square3.hasClass('x') || //horizontal win
                    square4.hasClass('x') && square5.hasClass('x') && square6.hasClass('x') ||//horizontal win
                    square7.hasClass('x') && square8.hasClass('x') && square9.hasClass('x') ||//horizontal win
                    square1.hasClass('x') && square4.hasClass('x') && square7.hasClass('x') || //vertical win
                    square2.hasClass('x') && square5.hasClass('x') && square8.hasClass('x') ||//vertical win
                    square3.hasClass('x') && square6.hasClass('x') && square9.hasClass('x') ||//vertical win
                    square1.hasClass('x') && square5.hasClass('x') && square9.hasClass('x') || //diagxnal win
                    square3.hasClass('x') && square5.hasClass('x') && square7.hasClass('x')//diagonal win
                ) {
                    displayWinner('X');
                    turns = 0;
                }
            }
            if (turns % 2 == 0) {
                $('#player-turn').text('O');
            } else {
                $('#player-turn').text('X');
            }
        });

        // reset 
        $('#reset').on('click', function () {
            $('#board li').text(' ');
            $('#board li').removeClass('disable');
            $('#board li').removeClass('o');
            $('#board li').removeClass('x');
            turns = 0;
            $('#winner-banner').hide();
        });
    })
    function PlayerDisplay(player) {
        var plyTeam = player.toUpperCase();
        $('#team').text(plyTeam);
        $('#team').removeAttr('class');
        $('#team').removeClass();
        $('#team').addClass(`team-${player}`);
    }
    document.getElementById("readme").addEventListener("click",function(){              
        window.open("ReadMe.txt","readme","height=600","width=600","menubar=1","scrollbars=1","status=1","toolbar=1","titlebar=1");
    })
    
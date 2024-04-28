// entry point
const threshold = 10;
$('#roll').click(
    function () {
        if ($(this).text() == 'Reset') {
            resetGame();
            return;
        }
        startGame();
    }
)

function resetGame() {
    $('#pn2').css('color', '#9EDDFF');
    $('#pn1').css('color', '#9EDDFF');
    $('#ps2').text('0');
    $('#ps1').text('0');
    $('.status').html('Place your bet!');
    $('.d1').attr('src', 'images/casino.png');
    $('.d2').attr('src', 'images/casino.png');
    $('#roll').text('Bet!');
}

function startGame() {
    $('#roll').attr('disabled', 'disabled');
    $('.centerDice img').attr('src', 'images/dice.gif');
    shuffleDices(false).then((data) => {
        const s1 = data[0];
        const s2 = data[1];
        $('.centerDice img').attr('src', 'images/dice2.png');
        evaluateScore(s1, s2);
        $('#roll').removeAttr('disabled');
    });
}

function shuffleDices(shuffle) {
    return new Promise((resolve, reject) => {
        let num1, num2;
        const d1 = $('.d1');
        const d2 = $('.d2');
        const interval = setInterval(() => {
            num1 = Math.floor(Math.random() * 6);
            d1.attr('src', `images/${num1 + 1}.png`);
            num2 = Math.floor(Math.random() * 6);
            d2.attr('src', `images/${num2 + 1}.png`);
            console.log('shuffling');
        }, 100);
        setTimeout(() => {
            if (!shuffle) {
                clearInterval(interval);
                resolve([num1 + 1, num2 + 1]);
            }
        }, 3500);
    });
}

function evaluateScore(a, b) {
    const ps1 = $('#ps1');
    const ps2 = $('#ps2');
    let score1 = parseInt(ps1.text());
    let score2 = parseInt(ps2.text());
    score1 += a;
    score2 += b;
    ps1.text(String(score1));
    ps2.text(String(score2));


    if (score1 == score2) {
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#4CCD99');
        if (score1 < threshold && score2 < threshold) {
            console.log(`${score1} == ${score2}`);
            $('.status').text('Scores are tied..');
        } else {
            console.log(`${score1} tied with ${score2}`);
            declareWinner('none');
        }
    } else if (score1 > score2) {
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#C70039');
        if (score1 >= threshold) {
            console.log(`${score1} won over ${score2}`);
            declareWinner('Player1');
        } else {
            console.log(`${score1} > ${score2}`);
            $('.status').text('Player 1 is ahead..');
        }
    } else {
        $('#pn2').css('color', '#4CCD99');
        $('#pn1').css('color', '#C70039');
        if (score2 >= threshold) {
            console.log(`${score2} won over ${score1}`);
            declareWinner('Player2');
        } else {
            console.log(`${score2} > ${score1}`);
            $('.status').text('Player 2 is ahead..');
        }
    }
}

function declareWinner(winner) {
    console.log('declaring winner');
    if (winner == 'none') $('.status').html(`It's a tie! <i class="fa-solid fa-ghost"></i>`);
    if (winner != 'none') $('.status').html(`${winner} won the game!! <i class="fa-solid fa-trophy"></i>`);
    $('#roll').text('Reset');
}


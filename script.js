// entry point

$('#roll').click(
    function () {
        startGame();
    }
)

function startGame() {
    $('.centerDice img').attr('src', 'images/dice.gif');
    shuffleDices(false).then((data) => {
        const s1 = data[0];
        const s2 = data[1];
        $('.centerDice img').attr('src', 'images/dice2.png');
        evaluateScore(s1, s2);
    });
}

function shuffleDices(shuffle) {
    return new Promise((resolve, reject) => {
        let num1, num2;
        const d1 = $('.d1');
        const d2 = $('.d2');
        const interval = setInterval(() => {
            num1 = Math.floor(Math.random()*6);
            d1.attr('src', `images/${num1+1}.png`);
            num2 = Math.floor(Math.random()*6);
            d2.attr('src', `images/${num2+1}.png`);
            console.log('shuffling');
        }, 100);
        setTimeout(() => {
            if (!shuffle) {
                clearInterval(interval);
                resolve([num1+1, num2+1]);
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


    if (score1 > score2 && score1 < 100) {
        console.log(`${score1} > ${score2} && ${score1} < 100`);
        $('.status').text('Player 1 is ahead..');
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#C70039');
    } else if (score2 > score1 && score2 < 100) {
        console.log(`${score2} > ${score1} && ${score2} < 100`);
        $('.status').text('Player 2 is ahead..');
        $('#pn2').css('color', '#4CCD99');
        $('#pn1').css('color', '#C70039');
    } else if (score1 >= 100 && score2 < 100) {
        console.log(`${score1} >= 100 && ${score2} < 100`);
        declareWinner('Player1');
    } else if (score2 >= 100 && score1 < 100) {
        console.log(`${score2} >= 100 && ${score1} < 100`);
        declareWinner('Player2');
    } else if (score1 >= 100 && score1 == score2) {
        console.log(`${score1} >= 100 ${score1} == ${score2}`);
        declareWinner('tied')
    }
     else {
        console.log(`${score1} == ${score2}`);
        $('.status').text('Scores are tied..');
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#4CCD99');
    }
}

function declareWinner(winner) {
    if (winner == 'tied') $('.status').html(`It's a tie! <i class="fa-solid fa-ghost"></i>`);
    if (!winner == 'tied') $('.status').html(`${winner} won the game!! <i class="fa-solid fa-trophy"></i>`);
}


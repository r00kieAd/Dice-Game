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
        }, 3600);
    });
}

function evaluateScore(a, b) {
    const ps1 = $('#ps1');
    const ps2 = $('#ps2');
    let score1 = parseInt(ps1.text());
    let score2 = parseInt(ps2.text());
    score1 += a;
    score2 += b;
    if (score1 > score2) {
        $('.status').text('Player 1 is ahead..');
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#C70039');
    } else if (score2 > score1) {
        $('.status').text('Player 2 is ahead..');
        $('#pn2').css('color', '#4CCD99');
        $('#pn1').css('color', '#C70039');
    } else {
        $('.status').text('Scores are tied..');
        $('#pn1').css('color', '#4CCD99');
        $('#pn2').css('color', '#4CCD99');
    }
    ps1.text(String(score1));
    ps2.text(String(score2));
}


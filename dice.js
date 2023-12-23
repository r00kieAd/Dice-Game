var flag = true;
let score1 = 0, score2 = 0;

if (flag) {


    function rolling() {
        document.getElementById("d0").src = "images/dice.gif";
        document.getElementById("d0").style.visibility = "visible";
    }

    function stop_rolling() {
        document.getElementById("d0").style.visibility = "hidden";
        document.getElementById("d0").src = "images/dice_still.png";
    }



    function rollDice(butt) {
        if (butt.innerHTML == "Refresh") {
            location.reload();
            return;
        }
        let x = [];
        x = document.getElementsByClassName("dice");
        x[0].src = selectDice();
        const a = x[0].src;
        x[2].src = selectDice();
        const b = x[2].src;
        // count scores
        score1 += parseInt(a.charAt(a.length - 5));
        score2 += parseInt(b.charAt(b.length - 5));
        // display scores
        document.getElementById("scr1").textContent = "Score: " + score1;
        document.getElementById("scr2").textContent = "Score: " + score2;
        // display status
        document.getElementById("scores").style.visibility = "visible";
        if (score1 > score2) {
            document.querySelector("h1.banner").textContent = "Player 1 is winning the game!";
        }
        if (score1 < score2) {
            document.querySelector("h1.banner").textContent = "Player 2 is winning the game!";
        }
        if (score1 == score2) {
            document.querySelector("h1.banner").textContent = "Scores are tied!";
        }
        // display winner
        if (score1 != score2) {
            if (score1 >= 100) {
                document.querySelector("h1.banner").textContent = "Player 1 won the game!";
                document.querySelector("Button").innerHTML = "Refresh";
            }
            if (score2 >= 100) {
                document.querySelector("h1.banner").textContent = "Player 2 won the game!";
                document.querySelector("Button").innerHTML = "Refresh";
            }
        }
    }

    function selectDice() {
        const n = Math.floor(Math.random() * 6) + 1;
        const img = "images/" + n + ".png";
        return img;
    }
}
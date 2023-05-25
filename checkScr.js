const scr = screen.width;
if (scr < 1500) {
    alert("Website not optimized for Mobile or Tablet screens!");
    document.getElementsByClassName("banner")[0].textContent = "Error!";
    document.getElementById("dices").style.visibility = "hidden";
    document.getElementById("players").style.visibility = "hidden";
    document.getElementsByTagName("button")[0].style.visibility = "hidden";
}

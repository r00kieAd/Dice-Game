const scr = screen.width;
if (scr < 1000) {
    // alert("Website not optimized for Mobile or Tablet screens!");
    document.getElementsByClassName("banner")[0].textContent = "Website not optimized for Mobile or Tablet screens!";
    document.getElementById("dices").style.visibility = "hidden";
    document.getElementById("players").style.visibility = "hidden";
    document.getElementsByTagName("button")[0].style.visibility = "hidden";
}

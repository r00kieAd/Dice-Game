// click to show mail id
function showMail() {
    document.getElementById("sM").innerText = "adhyatma.d01@gmail.com";
    setTimeout(() =>
    // {document.location.reload();}, 1000
    {
        document.getElementById("sM").innerHTML = "<img class='cont' src='images/message.gif' alt='mail'>Mail</a>";
    }, 1000
    )
}

function hoverTest(x, y) {
    if(y==0){
        x.src = "images/worldwide_still.png";
        x.style.width = "50px";
        x.style.height = "50px";
    }else{
        x.src = "images/worldwide.gif";
    }
}
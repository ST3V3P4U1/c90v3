function adduser() {
    player1_name=document.getElementById("player1_name").value;
    player2_name=document.getElementById("player2_name").value;
    localStorage.setItem("player1 name", player1_name);
    localStorage.setItem("player2 name", player2_name);
    window.location="gamepage.html";
}
player1_name=localStorage.getItem("player1 name");
player2_name=localStorage.getItem("player2 name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + ":" ;
document.getElementById("player2_name").innerHTML=player2_name + ":" ;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("playerquestion").innerHTML="Question Turn - " + player1_name;
document.getElementById("playeranswer").innerHTML="Answer Turn - " + player2_name;

function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actualAnswer=number1*number2;
    console.log(actualAnswer);

    question="<h4>"+number1+"x"+number2+"</h4>";
    inputBox="<br> Answer<input type='number' id='inputBox'>";
    checkButton="<br><br> <button class='btn btn-info' onclick='submit()'>Submit</button>";
    row=question+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
questionTurn="player 1";
answerturn="player 2";

function submit() {
    getAnswer=document.getElementById("inputBox").value;
    if (getAnswer==actualAnswer){
        if (answerturn=="player 1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
        player2_score=player2_score+1;
        document.getElementById("player2_score").innerHTML=player2_score;
        }
    }

    if (questionTurn=="player 1") {
        questionTurn="player 2";
        document.getElementById("playerquestion").innerHTML="Question Turn - " + player2_name;
    }
    else{
        questionTurn="player 1";
        document.getElementById("playerquestion").innerHTML="Question Turn - " + player1_name;
    }
    if (answerturn=="player 1") {
        answerturn="player 2";
        document.getElementById("playeranswer").innerHTML="Answer Turn - " + player2_name;
    }
    else{
        answerturn="player 1";
        document.getElementById("playeranswer").innerHTML="Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}
function send() 
   {
      number2 = document.getElementById("number1").value;
      number2 = document.getElementById("number2").value;
      actual_answer = parseInt(number1) * parseInt(number2);
      document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ; 
      document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
check_button ="<br><br><button class='btn-btn-info' onclick='check()'>Check</button>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
row = question_number + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("number1").value = "";
document.getElementsById("number2").value = "";
 }
   function check() {
get_answer = document.getElementById("input_check_box").value;
if (get_answer == actual_answer){
}
if (answer_turn == "player1"){
   update_player1_score = player1_score +1;
   document.getElementById("player1_score").innerHTML = update_player1_score;
}

else{
   update_player2_score = player2_score +1;
   document.getElementById("player2_score").innerHTML = update_player2_score;
}


if (question_turn == "player1"){
   question_turn = "player2"
   document.getElementById("player_question").innerHTML = "Question turn - " + player2_name ;
}
else {
   question_turn == "player1"
   document.getElementById("player_question").innerHTML = "Question turn - " + player1_name ;
}
   }
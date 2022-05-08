question_turn = "player_1"
answer_turn = "player_2" 
player1_score=0
player2_score=0
function Send(){
    Number1 = document.getElementById("Number1").value
    Number2 = document.getElementById("Number2").value
    Actual_answer= parseInt(Number1) * parseInt(Number2)
 question_number= "<h4>"+Number1+"X"+Number2+"</h4>"
 input_box= "<br>Answer:<input type='text' id='abcd'>"
 check_btn="<br><br><br><button class='btn btn-info' onclick='Check()'>Check</button>"
 jokrestore= question_number+input_box+check_btn
 document.getElementById("output").innerHTML=jokrestore
 document.getElementById("Number1").value=""
 document.getElementById("Number2").value=""
}
function Check(){
    get_answer=document.getElementById("abcd").value
    if(get_answer==Actual_answer){
        if(answer_turn=="player_1"){
            update_player1_score = player1_score +1
            document.getElementById("player1_score").innerHTML= update_player1_score
        }
        else {}
        update_player2_score = player2_score +1
            document.getElementById("player2_score").innerHTML= update_player2_score
    }
    if(question_turn =="player_1"){
        question_turn="player_2"
        document.getElementById("player_question").innerHTML="Question_Turn - "+user_name2

    }
    else{
        question_turn="player_1"
        document.getElementById("player_question").innerHTML="Question_Turn - "+user_name
    }
}
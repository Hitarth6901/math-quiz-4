function adduser(){
    user_name=document.getElementById("input_1").value
    localStorage.setItem("user_name",user_name)
    window.location="game_page.html"
    user_name2=document.getElementById("input_2").value
    localStorage.setItem("user_name2",user_name2)
    
}

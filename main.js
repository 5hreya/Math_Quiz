function Adduser(){
    var PlayerName_1 = document.getElementById("Player1").value 
    var PlayerName_2 = document.getElementById("Player2").value 

    localStorage.setItem("PlayerName1", PlayerName_1)
    localStorage.setItem("PlayerName2", PlayerName_2)

    window.location="New.html"
}
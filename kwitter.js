function adduser(){
    var x= document.getElementById("login").value;
    localStorage.setItem("user_name",x);
    window.location="kwitter_room.html"
}
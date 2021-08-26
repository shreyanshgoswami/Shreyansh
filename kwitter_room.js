 
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCf3G-eCfmHG4Q20CxOmLimKjR65qjSQOY",
      authDomain: "project-8145357377301077610.firebaseapp.com",
      databaseURL: "https://project-8145357377301077610-default-rtdb.firebaseio.com",
      projectId: "project-8145357377301077610",
      storageBucket: "project-8145357377301077610.appspot.com",
      messagingSenderId: "1011400634167",
      appId: "1:1011400634167:web:375c31f080ce5fdf3174b2"
    };
    firebase.initializeApp(firebaseConfig);
var y = localStorage.getItem("user_name");
document.getElementById("asd").innerHTML= "Welcome back "+ y ;

function add_rooma(){
var z = document.getElementById("add_room").value;
firebase.database().ref("/").child(z).update({purpose:"adding_new_room_name"});
localStorage.setItem("room_name",z);
window.location="kwitter_page.HTML";

}

function getData()
 { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; console.log(Room_names); row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; document.getElementById("output").innerHTML += row; }); }); } 
getData();
function redirectToRoomName(x){
  console.log(x);
  localStorage.setItem("room_name",x);
  window.location = "kwitter_page.html";

}

function logout(){
  localStorage.removeItem("user_name");

  localStorage.removeItem("room_name");
  window.location="index.html"
}
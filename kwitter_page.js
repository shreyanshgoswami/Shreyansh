//YOUR FIREBASE LINKS
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

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
    
      localStorage.removeItem("room_name");
      window.location="index.html"
    }

    function send(){
          x = document.getElementById("send_input").value;
          firebase.database().ref(room_name).push({name:shreyansh,message:hello, like:0 });
          document.getElementById("send_input").value="";
    }
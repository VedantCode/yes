
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

var firebaseConfig = {
      apiKey: "AIzaSyDDx8pNx9gx6OzoG3CVjGtB4hJ6sbGRHuw",
      authDomain: "kwitter-afdbc.firebaseapp.com",
      projectId: "kwitter-afdbc",
      storageBucket: "kwitter-afdbc.appspot.com",
      messagingSenderId: "795443870251",
      appId: "1:795443870251:web:e6a6bc7af72fc30811886e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

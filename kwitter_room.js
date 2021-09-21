var firebaseConfig = {
      apiKey: "AIzaSyDThiwz0zoMNULjENIyjZZT5k8Lem9ia_M",
      authDomain: "project-kwitter-app-2836c.firebaseapp.com",
      databaseURL: "https://project-kwitter-app-2836c-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-app-2836c",
      storageBucket: "project-kwitter-app-2836c.appspot.com",
      messagingSenderId: "888270762936",
      appId: "1:888270762936:web:c387a0dff8d16ca435d54d",
      measurementId: "G-XQG9YDV1E7"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    
//ADD YOUR FIREBASE LINKS HERE
function logout()
{
      window.location = "index.html";
}
function add_room()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "addinguser"
        });
        localStorage.setItem("room_name",room_name);
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

var firebaseConfig = {
    apiKey: "AIzaSyBqxwo6c0pERbNd018BJkZvK4Xh8oE_WyU",
    authDomain: "letschat-42d05.firebaseapp.com",
    databaseURL: "https://letschat-42d05-default-rtdb.firebaseio.com",
    projectId: "letschat-42d05",
    storageBucket: "letschat-42d05.appspot.com",
    messagingSenderId: "798769547718",
    appId: "1:798769547718:web:c512d33222b72ae54c8ac7"
  };
  
  firebase.initializeApp(firebaseConfig);

  function adduser(){

    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
  }

  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML="Welcome: "+user_name+"!";

    function addroom(){

      Room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(Room_name).update({
  purpose: "adding room name"    
});
localStorage.setItem("room_name",Room_name);
window.location="letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room name" + Room_name);
row = "<div class = 'room name' id ="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room name",name);
  window.location="room_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
}
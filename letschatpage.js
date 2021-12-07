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

  user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    function send(){
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
    }

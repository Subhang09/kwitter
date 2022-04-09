//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBaBs2hdkhDrjrL215JmsIIJsBwKHMxnDA",
      authDomain: "kwitter-fd77d.firebaseapp.com",
      databaseURL: "https://kwitter-fd77d-default-rtdb.firebaseio.com",
      projectId: "kwitter-fd77d",
      storageBucket: "kwitter-fd77d.appspot.com",
      messagingSenderId: "711655643271",
      appId: "1:711655643271:web:7a1cedf2a2f66dd1e9c022"
    };
    firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}
//End code
      } });  }); }
getData();

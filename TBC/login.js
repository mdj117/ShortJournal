

function login() {
   
    
            var userEmail = document.getElementById("email_field").value;
            var userPass = document.getElementById("password_field").value;
    
    
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
                  
                  var errorCode = error.code;
                  var errorMessage = error.message;
                

                  
                });
    
          window.alert("Logged in");   
            
}

function logout() {
    
    firebase.auth().signOut().then(function() {
  // Sign-out successful.
        window.alert("Signed out");
}).catch(function(error) {
  // An error happened.
});s
    
}


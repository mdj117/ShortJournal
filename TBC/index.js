
        function login() {
          
            var userEmail = document.getElementById("email_field").value;
           var userPass = document.getElementById("password_field").value;
            
             firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {

        });    

          window.alert("Hi")
        }
       

        firebase.auth().onAuthStateChanged(function(user) {
                  if (user) {
                      document.getElementById("user_div").style.display = "block";
                      document.getElementById("login_div").style.display = "none";
                      document.getElementById("dropdown-content").style.display = "block";
                      
                      var user = firebase.auth().currentUser;
                      
                          if(user != null){

                              var email_id = user.email;
                              document.getElementById("user_para").innerHTML;
                          }

                              
                  } else {
                     document.getElementById("user_div").style.display = "none";
                     document.getElementById("login_div").style.display = "block";
                     document.getElementById("dropdown-content").style.display = "none";             
                  }
                });
    
function logout() {
    
    firebase.auth().signOut();
    window.alert("logged out");
}

 var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
  };
  firebase.initializeApp(config);

  var storage = firebase.storage();
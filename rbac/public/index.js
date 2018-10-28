$(document).ready(function(){
    $("#google").click(function(){
        var theDB = firebase.database();
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            var token = result.credential.accessToken;
            var user = result.user;
            //$("#authstuff").html(`<h1>Welcome ${user.displayName}</h1><p><img src="${user.photoURL}"></p>`);
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
        });
    });
    
    $("#facebook").click(function(){console.log("Facebook")});
    
    $("#twitter").click(function(){console.log("Twitter")});
});
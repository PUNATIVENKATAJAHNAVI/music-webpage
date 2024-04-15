document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the username and password are valid
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var user = users.find(function(u) {
    return u.username === username && u.password === password;
  });

  if (user) {
    // Redirect to the home page after successful login
    window.location.href = "final.html"; // Change "home.html" to your actual home page URL
  } else {
    alert("Invalid login credentials. Please try again.");
  }
});
window.onbeforeunload = function(event) { 
  var isOK = confirm("Are you sure to Leave this Page?"); 
  if(isOK) { 
  LogoutFuncton();
  } 
  }
  function LogoutFuncton (){
      top.location.href= "login.html";
  }
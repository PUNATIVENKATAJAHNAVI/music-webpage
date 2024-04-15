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
    // Store user information in local storage
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // Redirect to a new page or perform any desired action
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
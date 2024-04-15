document.getElementById("registerForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById("regUsername").value;
  var password = document.getElementById("regPassword").value;

  // Check if the username is already taken
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var existingUser = users.find(function(u) {
    return u.username === username;
  });

  if (existingUser) {
    alert("Username is already taken. Please choose a different one.");
    return;
  }

  // Create a new user
  var newUser = {
    username: username,
    password: password
  };

  // Add the new user to the list of users
  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registration successful! You can now log in.");
  window.location.href = "login.html";
});
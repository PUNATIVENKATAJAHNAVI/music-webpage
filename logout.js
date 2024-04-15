document.getElementById("logoutButton").addEventListener("click", function() {
    // Remove the logged-in user information from local storage
    localStorage.removeItem("loggedInUser");
  
    // Redirect to the login page
    window.location.href = "login.html"; // Change "login.html" to your actual login page URL
  });
  
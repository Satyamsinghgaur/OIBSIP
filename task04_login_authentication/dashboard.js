// Redirect if not logged in
const username = localStorage.getItem("loggedInUser");
if (!username) {
  window.location.href = "login.html";
} else {
  document.getElementById("greeting").innerText = `Hello, ${username}!`;
}

// Logout function
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}

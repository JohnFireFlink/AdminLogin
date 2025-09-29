function validateLogin() {
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();
  let usernameError = document.getElementById("usernameError");
  let passwordError = document.getElementById("passwordError");
  let loginMessage = document.getElementById("loginMessage");

  // Reset messages
  usernameError.style.display = "none";
  passwordError.style.display = "none";
  loginMessage.textContent = "";

  let valid = true;

  if (username === "") {
    usernameError.style.display = "block";
    valid = false;
  }

  if (password === "") {
    passwordError.style.display = "block";
    valid = false;
  }

  if (!valid) return;

  if (username === "Admin" && password === "admin123") {
    loginMessage.textContent = "Login Successful!";
    loginMessage.className = "message success";
  } else {
    loginMessage.textContent = "Invalid username or password!";
    loginMessage.className = "message fail";
  }
}

// Show/Hide password
function togglePassword() {
  let passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

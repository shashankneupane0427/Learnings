import { users } from './data/users.js';

const loginForm = document.getElementById("login-form");
const loginBtn = document.getElementById("login-btn");
const errorMsg = document.getElementById("error-msg");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Check if input fields are empty
  if (username.trim() === '' || password.trim() === '') {
    errorMsg.textContent = "Please fill out the form";
    setTimeout(() => {
      errorMsg.textContent = "";
    }, 3000); // show error message for 3 seconds
    return;
  }

  for (const user of users) {
    if (user.username === username && user.password === password) {
      window.location.href = user.page;
      return;
    }
  }

  errorMsg.textContent = "Invalid username or password";
  setTimeout(() => {
    errorMsg.textContent = "";
  }, 3000); // show error message for 3 seconds
});
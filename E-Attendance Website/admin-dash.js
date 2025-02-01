import { users } from "./data/users.js";
document.addEventListener('DOMContentLoaded', () => {
    // Get the display data div
    const displayDataDiv = document.getElementById('display-data');

    // Check if there's data in LocalStorage
    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
        let html = '';
        userData.forEach((data, index) => {
            html += `
            <tr>
                                <td>${users[0].username}</td>
                                <td> ${data.date} </td>
                                <td><button class="present-button">Present</button></td>
            </tr>
            `;
        });
        displayDataDiv.innerHTML = html;
    } else {
        displayDataDiv.innerHTML = '<p>No user data found.</p>';
    }
});

// Select the button by its ID
const clearButton = document.getElementById('clearStorageButton');

// Add a click event listener to the button
clearButton.addEventListener('click', function() {
    // Clear all items in localStorage
    localStorage.clear();
    console.log('All data cleared from localStorage');
});

// Side Bar
const dashboard = document.getElementById("dashboard");
const application = document.getElementById("application");
const signout = document.getElementById("signout");

// Add an event listener to the div
dashboard.addEventListener('click', function() {
  // Redirect to another HTML page
  window.location.href = 'admin-dash.html';
});

// Add an event listener to the div
application.addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'admin-app.html';
  });

// Add an event listener to the div
signout.addEventListener('click', function() {
    // Redirect to another HTML page
    window.location.href = 'index.html';
  });
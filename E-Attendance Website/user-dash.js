// Side Bar
    const dashboard = document.getElementById("dashboard");
    const application = document.getElementById("application");
    const signout = document.getElementById("signout");

    // Add an event listener to the div
    dashboard.addEventListener('click', function() {
      // Redirect to another HTML page
      window.location.href = 'user-dash.html';
    });

    // Add an event listener to the div
    application.addEventListener('click', function() {
        // Redirect to another HTML page
        window.location.href = 'user-app.html';
      });

    // Add an event listener to the div
    signout.addEventListener('click', function() {
        // Redirect to another HTML page
        window.location.href = 'index.html';
      });

      document.addEventListener('DOMContentLoaded', () => {
        // Get the submit button
        const submitBtn = document.getElementById('submit-btn');
    
        // Hardcoded username
        const username = 'Shashank';
    
        // Add event listener to submit button
        submitBtn.addEventListener('click', () => {
            // Get today's date
            const today = new Date();
            const date = today.toLocaleDateString();
    
            // Store the username and date in LocalStorage
            let userData = localStorage.getItem('userData');
            if (userData) {
                userData = JSON.parse(userData);
            } else {
                userData = [];
            }
            userData.push({ username, date });
            localStorage.setItem('userData', JSON.stringify(userData));
        });
    });
    
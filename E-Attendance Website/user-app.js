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
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('application-form');

 
  loadApplicationData();

  form.addEventListener('submit', function (event) {
      event.preventDefault(); 

      
      const title = document.getElementById('title').value;
      const details = document.getElementById('details').value;
      const currentDate = new Date().toISOString().split('T')[0]; 
      const username = "Shashank"; 

      
      const application = { username, title, details, date: currentDate, status: 'PENDING' };

      
      saveApplicationData(application);

      
      loadApplicationData();

      
      form.reset();
  });
});


function saveApplicationData(application) {
  const existingData = JSON.parse(localStorage.getItem('applications')) || [];
  existingData.push(application);
  localStorage.setItem('applications', JSON.stringify(existingData));
}


function loadApplicationData() {
  const applications = JSON.parse(localStorage.getItem('applications')) || [];
  const tableBody = document.getElementById('applications-table');

  
  tableBody.innerHTML = '';

  applications.forEach(application => {
      if (application.username === "Shashank") { 
          const statusClass = application.status.toLowerCase(); 
          const newRow = `
              <tr>
                  <td>${application.title}</td>
                  <td>${application.date}</td>
                  <td><span class="status ${statusClass}">${application.status}</span></td>
              </tr>
          `;
          tableBody.insertAdjacentHTML('beforeend', newRow);
      }
  });
}

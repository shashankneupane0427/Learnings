
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
  });document.addEventListener('DOMContentLoaded', function () {
    loadAdminApplicationData();

    
    document.getElementById('admin-applications-table').addEventListener('click', function (event) {
        if (event.target.classList.contains('approve')) {
            updateApplicationStatus(event.target.closest('tr'), 'APPROVED');
        } else if (event.target.classList.contains('reject')) {
            updateApplicationStatus(event.target.closest('tr'), 'REJECTED');
        }
    });
});


function loadAdminApplicationData() {
    const applications = JSON.parse(localStorage.getItem('applications')) || [];
    const tableBody = document.getElementById('admin-applications-table');

    
    tableBody.innerHTML = '';

    applications.forEach(application => {
        const statusClass = application.status.toLowerCase(); // get status class for the correct color
        const disabled = (application.status === 'APPROVED' || application.status === 'REJECTED') ? 'disabled' : '';

        const newRow = `
            <tr>
                <td>${application.username}</td>
                <td>${application.title}</td>
                <td>${application.date}</td>
                <td>
                    <button class="approve" ${disabled}>Approve</button>
                    <button class="reject" ${disabled}>Reject</button>
                </td>
            </tr>
        `;

        tableBody.insertAdjacentHTML('beforeend', newRow);

        
        if (disabled) {
            const statusCell = `
                <span class="status ${statusClass}">${application.status}</span>
            `;
            tableBody.lastElementChild.cells[3].innerHTML = statusCell;
        }
    });
}


function updateApplicationStatus(row, status) {
    const username = row.cells[0].textContent;
    const title = row.cells[1].textContent;
    const applications = JSON.parse(localStorage.getItem('applications')) || [];

   
    const updatedApplications = applications.map(application => {
        if (application.username === username && application.title === title) {
            application.status = status;
        }
        return application;
    });

    localStorage.setItem('applications', JSON.stringify(updatedApplications));

    
    const statusClass = status.toLowerCase();
    row.cells[3].innerHTML = `<span class="status ${statusClass}">${status}</span>`;

    
    row.querySelector('.approve').disabled = true;
    row.querySelector('.reject').disabled = true;
}

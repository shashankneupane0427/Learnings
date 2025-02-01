document.addEventListener('DOMContentLoaded', () => {
    const presentDay = document.querySelector('.stat-number-present');
    const absentDay = document.querySelector('.stat-number-absent');
    const presentButton = document.querySelector('.mark-present-btn');

    const todayDate = new Date().toISOString().split('T')[0]; //Retrieves date in format YYYY-MM-DD

    //Initialize attendance data from local storage or as an empty object
    let attendanceData = JSON.parse(localStorage.getItem('attendanceData')) || {};
    let lastCheckedDate = localStorage.getItem('lastCheckedDate');

    //Function to check if the day has changed and updates attendance
    function checkAndUpdateAttendance() {
        if (lastCheckedDate !== todayDate) {
            if (lastCheckedDate) {
                if (!attendanceData[lastCheckedDate]) {
                    attendanceData[lastCheckedDate] = 'absent';
                }
            }
            localStorage.setItem('lastCheckedDate', todayDate);
        }
        updateCounts();
    }

    checkAndUpdateAttendance();

    //Event listener for the present button to make today's date as present and update the count
    presentButton.addEventListener('click', () => {
        if (attendanceData[todayDate] !== 'present') {
            attendanceData[todayDate] = 'present';
            localStorage.setItem('attendanceData', JSON.stringify(attendanceData));
        }
        updateCounts();
    });

    //Function to update the counts of present and absent days
    function updateCounts() {
        let presentDays = 0;
        let absentDays = 0;

        for (const date in attendanceData) {
            if (attendanceData[date] === 'present') {
                presentDays++;
            } else if (attendanceData[date] === 'absent') {
                absentDays++;
            }
        }

        presentDay.textContent = presentDays;
        absentDay.textContent = absentDays;
    }

    //Function to calculate time until the end of the day and set a timeout to check attendance
    function scheduleDailyCheck() {
        const now = new Date();
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
        const timeUntilEndOfDay = endOfDay - now;

        setTimeout(() => {
            // Perform daily attendance check at the end of the day
            checkAndUpdateAttendance();
            // Schedule the next check for the following day
            scheduleDailyCheck();
        }, timeUntilEndOfDay);
    }

    scheduleDailyCheck();
});

// Function to display the current date
function displayDate() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.querySelector('.attendance-date').textContent = today.toLocaleDateString(undefined, options);
    }
  
  // Call displayDate on page load
  displayDate();

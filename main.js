// Calendar Functionality
let currentMonthWLU = new Date().getMonth();
let currentYearWLU = new Date().getFullYear();
let currentMonthUW = new Date().getMonth();
let currentYearUW = new Date().getFullYear();

function generateCalendar(month, year, university) {
    const calendarBody = document.getElementById(`calendar-body-${university}`);
    calendarBody.innerHTML = "";

    // Set month and year in header
    document.getElementById(`month-year-${university}`).textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;

    // Calculate the first day of the month and the total days in the month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;

    // Create 6 rows to ensure all days fit (including for months that span 6 weeks visually)
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        // Create 7 cells per row (one for each day of the week)
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");

            if (i === 0 && j < firstDay) {
                // Empty cells before the start of the month
                cell.textContent = "";
            } else if (date > daysInMonth) {
                // Empty cells after the end of the month
                cell.textContent = "";
            } else {
                // Populate the cell with the day of the month
                cell.textContent = date;

                // Example events (customize these as needed)
                if (university === "wlu" && (date === 7 || date === 22)) {
                    const event = document.createElement("div");
                    event.classList.add("event");
                    event.textContent = "WLU Event";
                    cell.appendChild(event);
                } else if (university === "uw" && (date === 10 || date === 25)) {
                    const event = document.createElement("div");
                    event.classList.add("event");
                    event.textContent = "UW Event";
                    cell.appendChild(event);
                }

                date++;
            }

            row.appendChild(cell);
        }

        // Append the row to the calendar body
        calendarBody.appendChild(row);

        // Stop adding rows if all days of the month have been added
        if (date > daysInMonth) {
            break;
        }
    }
}

function prevMonth(university) {
    if (university === 'wlu') {
        currentMonthWLU = (currentMonthWLU === 0) ? 11 : currentMonthWLU - 1;
        currentYearWLU = (currentMonthWLU === 11) ? currentYearWLU - 1 : currentYearWLU;
        generateCalendar(currentMonthWLU, currentYearWLU, 'wlu');
    } else if (university === 'uw') {
        currentMonthUW = (currentMonthUW === 0) ? 11 : currentMonthUW - 1;
        currentYearUW = (currentMonthUW === 11) ? currentYearUW - 1 : currentYearUW;
        generateCalendar(currentMonthUW, currentYearUW, 'uw');
    }
}

function nextMonth(university) {
    if (university === 'wlu') {
        currentMonthWLU = (currentMonthWLU === 11) ? 0 : currentMonthWLU + 1;
        currentYearWLU = (currentMonthWLU === 0) ? currentYearWLU + 1 : currentYearWLU;
        generateCalendar(currentMonthWLU, currentYearWLU, 'wlu');
    } else if (university === 'uw') {
        currentMonthUW = (currentMonthUW === 11) ? 0 : currentMonthUW + 1;
        currentYearUW = (currentMonthUW === 0) ? currentYearUW + 1 : currentYearUW;
        generateCalendar(currentMonthUW, currentYearUW, 'uw');
    }
}

// Initialize both calendars on load
document.addEventListener("DOMContentLoaded", () => {
    generateCalendar(currentMonthWLU, currentYearWLU, 'wlu'); // Initialize WLU calendar
    generateCalendar(currentMonthUW, currentYearUW, 'uw'); // Initialize UW calendar
});

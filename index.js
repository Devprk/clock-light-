function updateTimeAndDate() {
    const now = new Date();

    // Extract and format hours and minutes
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    let amPm = hours >= 12 ? 'P' : 'A'; // Only use first character (P or A)
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    let timeStr = hours.toString().padStart(2, '0') + minutes;

    // Replace leading 0 with space for aesthetics
    if (timeStr.startsWith('0')) {
        timeStr = ' ' + timeStr.slice(1);
    }

    // Extract and format MMDDYY
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2); // Get last 2 digits

    if (month.startsWith('0')) {
        month = ' ' + month.slice(1);
    }
    if (day.startsWith('0')) {
        day = ' ' + day.slice(1);
    }

    // Combine time + AM/PM + date
    const displayStr = timeStr + amPm + 'M' + month + day + year;

    // Fill into the clock display
    for (let i = 0; i < 12; i++) {
        const char = displayStr[i] || ' ';
        const el1 = document.getElementById('char' + i + '1');
        const el2 = document.getElementById('char' + i + '2');

        if (el1 && el2) {
            el1.textContent = char;
            el2.textContent = char;
        }
    }
}

// Initial update
updateTimeAndDate();

// Update every minute
setInterval(updateTimeAndDate, 60000);

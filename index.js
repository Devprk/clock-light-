function updateTimeAndDate() {
    const now = new Date();
  
    // Format time
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const amPm = hours >= 12 ? 'P' : 'A';
  
    if (hours > 12) hours -= 12;
    else if (hours === 0) hours = 12;
  
    let timeStr = hours.toString().padStart(2, '0') + minutes;
    if (timeStr.startsWith('0')) {
      timeStr = ' ' + timeStr.slice(1);
    }
  
    // Format date
    let month = (now.getMonth() + 1).toString().padStart(2, '0');
    let day = now.getDate().toString().padStart(2, '0');
    const year = now.getFullYear().toString().slice(-2);
  
    if (month.startsWith('0')) month = ' ' + month.slice(1);
    if (day.startsWith('0')) day = ' ' + day.slice(1);
  
    const displayStr = timeStr + amPm + 'M' + month + day + year;
  
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
  
  // Sync with the next full minute
  function startClock() {
    updateTimeAndDate(); // Initial update
    const now = new Date();
    const msToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  
    // Start interval at the top of the next minute
    setTimeout(() => {
      updateTimeAndDate();
      setInterval(updateTimeAndDate, 60000); // Then update every minute
    }, msToNextMinute);
  }
  
  startClock();
  

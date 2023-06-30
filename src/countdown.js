// set the launch date
const launchDate = new Date("2023-09-30T12:00:00Z");

function updateLaunchDate() {
  // Get current time
  const currentTime = new Date().getTime();
  const distance = launchDate - currentTime;

  // Calculate remaining days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //console.log(minutes, seconds, days, hours);
  //Display the counter on the UI
  const countdownDays = document.getElementById("countdownDays");
  const countdownHours = document.getElementById("countdownHours");
  const countdownMins = document.getElementById("countdownMins");
  const countdownSecs = document.getElementById("countdownSecs");
  countdownDays.innerHTML = `${days}`;
  countdownHours.innerHTML = `${hours}`;
  countdownMins.innerHTML = `${minutes}`;
  countdownSecs.innerHTML = `${seconds}`;

  // Update the countdown every second
  setInterval(updateLaunchDate, 1000);
}
// Call the updateCountdown function initially
updateLaunchDate();

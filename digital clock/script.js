//Display date
date.textContent = now.toLocalDateString("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

//Run immediately
digitalClock();

//Update every second
setInterval(digitalClock, 1000);

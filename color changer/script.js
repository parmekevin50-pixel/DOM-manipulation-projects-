const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const yellow = document.querySelector("#yellow");
const reset = document.querySelector("#reset");

// Red button
red.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

// Green button
green.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
});

// Blue button
blue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
});

// Yellow button
yellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

// Reset button
reset.addEventListener("click", function () {
  document.body.style.backgroundColor = "#f4f4f4";
});

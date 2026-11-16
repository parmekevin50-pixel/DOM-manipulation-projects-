const form = document.querySelector("#bmi-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const bmiValue = document.querySelector("#bmi-value");
const bmiCategory = document.querySelector("#bmi-category");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get input values
  const height = Number(heightInput.value);
  const weight = Number(weightInput.value);

  // Validate inputs
  if (
    height <= 0 ||
    weight <= 0 ||
    !Number.isFinite(height) ||
    !Number.isFinite(weight)
  ) {
    bmiValue.textContent = "Please enter valid values";
    bmiCategory.textContent = "";
    return;
  }

  // Convert height into meters
  const heightInMeter = height / 100;

  // Calculate BMI
  const bmi = weight / (heightInMeter * heightInMeter);

  // Display result
  bmiValue.textContent = "BMI: " + bmi.toFixed(2);

  // BMI category (adult reference only)
  let category = "";

  if (bmi < 18.5) {
    category = "Below usual adult range";
  } else if (bmi < 25) {
    category = "Within usual adult range";
  } else if (bmi < 30) {
    category = "Above usual adult range";
  } else {
    category = "Higher adult BMI range";
  }

  bmiCategory.textContent = category;
});

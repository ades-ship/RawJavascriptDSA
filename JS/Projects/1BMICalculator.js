const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const heightInput = document.querySelector("#height").value.trim();
  const weightInput = document.querySelector("#weight").value.trim();
  const result = document.querySelector("#result");

  // Check if the inputs are valid numbers only
  if (!/^\d+(\.\d+)?$/.test(heightInput)) {
    result.innerHTML = `❌ Please provide a valid height.`;
    return;
  }

  if (!/^\d+(\.\d+)?$/.test(weightInput)) {
    result.innerHTML = `❌ Please provide a valid weight.`;
    return;
  }

  const height = parseFloat(heightInput);
  const weight = parseFloat(weightInput);

  if (height <= 0) {
    result.innerHTML = `❌ Height must be greater than zero.`;
  } else if (weight <= 0) {
    result.innerHTML = `❌ Weight must be greater than zero.`;
  } else {
    // Calculate BMI
    const bmi = (weight / (height * height / 10000)).toFixed(2);
    result.innerHTML = `<b><span>✅ BMI is: ${bmi}</span></b>`;
  }
});

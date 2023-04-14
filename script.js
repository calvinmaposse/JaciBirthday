// Get the current hour
const currentHour = new Date().getHours();

// Get the container for the reason buttons
const reasonsContainer = document.getElementById("reasons-container");

// Generate the reason buttons
for (let i = 0; i <= 23; i++) {
  // If the current hour is greater than the button number, show the button
  if(true){
  //if (i <= currentHour) {
    const reasonButton = document.createElement("button");
    reasonButton.classList.add("reason-button");
    reasonButton.innerHTML = '<button class="reason-button" id="reason-'+ i + '"'+ '>Motivo #'+ i + '</button>';
    reasonButton.addEventListener("click", () => {
      // Redirect to the corresponding reason page
      window.location.href = `reason-${i}.html`;
    });
    reasonsContainer.appendChild(reasonButton);
  }
}

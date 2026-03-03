// Hämta alla bokningsknappar
const buttons = document.querySelectorAll(".book-btn");

buttons.forEach(button => {
  button.addEventListener("click", function () {

    // Hitta närmaste class-card
    const card = this.closest(".class-card");

    // Hitta texten med spots
    const spotsText = card.querySelector("p:nth-of-type(2)");

    // Plocka ut numret från texten
    let spots = parseInt(spotsText.textContent.replace(/\D/g, ""));

    if (spots > 0) {
      spots -= 1;
      spotsText.textContent = "Spots left: " + spots;

      this.textContent = "Booked";
      this.disabled = true;

      // Om sista platsen bokades
      if (spots === 0) {
        this.textContent = "Full";
      }
    }

  });
});
// Booking form micro interaction
const bookingForm = document.getElementById("booking-form");
const confirmation = document.getElementById("confirmation");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault(); // förhindra reload

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const classChoice = document.getElementById("class-select").value;

    if (!classChoice) {
      confirmation.textContent = "Please select a class.";
      confirmation.style.color = "red";
      return;
    }

    confirmation.textContent = `Thank you ${name}! You booked ${classChoice} class.`;
    confirmation.style.color = "green";

    // Rensa formulär
    bookingForm.reset();
  });
}
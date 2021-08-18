
// getting ticket quantity and price
function ticketQuantity(isIncrease, price, planet) {
    const planetInput = document.getElementById(planet + '-input');
    let planetInputValue = parseInt(planetInput.value);
    if (isIncrease == true) {
        planetInputValue = planetInputValue + 1;
    }
    else {
        if (planetInput.value > 0) {
            planetInputValue = planetInputValue - 1;
        }
    }
    planetInput.value = planetInputValue;
    // updating per ticket price
    const planetTicketPrice = document.getElementById(planet + '-ticket-price');
    planetTicketPrice.innerText = planetInput.value * price;
    getTotal() // function calling
}

// handling total cost
function getTotal() {
    // getting current input value/ ticket quantity
    const marsInput = document.getElementById('mars-input').value;
    const moonInput = document.getElementById('moon-input').value;
    const total = (marsInput * 3000) + (moonInput * 5000);
    // updating total cost 
    document.getElementById('total-cost').innerText = total;

}

// handling mars increase/decrease button
document.getElementById('mars-btn-plus').addEventListener("click", function () {
    ticketQuantity(true, 3000, "mars");
})

document.getElementById('mars-btn-minus').addEventListener("click", function () {
    ticketQuantity(false, 3000, "mars");
})

// handling moon increase/decrease button
document.getElementById('moon-btn-plus').addEventListener("click", function () {
    ticketQuantity(true, 5000, "moon");
})

document.getElementById('moon-btn-minus').addEventListener("click", function () {
    ticketQuantity(false, 5000, "moon");
})
const costInput = document.querySelector("#cost");
const tipButtons = document.querySelectorAll(".tip-amount");
const totalPrice = document.querySelector(".total span");
const submitButton = document.querySelector("#submit");

// Grab tip % from buttons
tipButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
       tipAmount = e.target.innerText; // DO NOT use let here
        // console.log(tipAmount);
    })
});

submitButton.addEventListener("click", (e) => {
    e.preventDefault;
    performCalculation();
    totalPrice.innerText = totalCost.toFixed(2); // Adds 2 decimal places
});

const performCalculation = function () {
    let serviceCost = Number(costInput.value);

    if (tipAmount == 10) {
        totalCost = (serviceCost * 0.1) + serviceCost;
    } else if (tipAmount == 15) {
        totalCost = (serviceCost * 0.15) + serviceCost;
    } else if (tipAmount == 18) {
        totalCost = (serviceCost * 0.18) + serviceCost;
    } else if (tipAmount == 20) {
        totalCost = (serviceCost * 0.2) + serviceCost;
    }
};
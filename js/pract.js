const tipButtons = document.querySelectorAll(".tip-amount");
const costInput = document.querySelector("#cost");
const tipTotal = document.querySelector(".tip-total span");
const totalPrice = document.querySelector(".price-total span");
const submitButton = document.querySelector("#submit");

function performCalculation() {
    const serviceCost = Number(costInput.value);
    // Initialize variables
    let tip;
    let totalCost;
    let tipAmount;

    // Grab tip % from buttons
    tipButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            tipAmount = Number(e.target.innerText);
            return tipAmount;
        })
    })

    if (tipAmount === 10) {
        tip = serviceCost * 0.1;
        totalCost = tip + serviceCost;
    } else if (tipAmount === 15) {
        tip = serviceCost * 0.15;
        totalCost = tip + serviceCost;
    } else if (tipAmount === 18) {
        tip = serviceCost * 0.18;
        totalCost = tip + serviceCost;
    } else if (tipAmount === 20) {
        tip = serviceCost * 0.2;
        totalCost = tip + serviceCost;
    }

    tipTotal.innerText = tip.toFixed(2);
    totalPrice.innerText = totalCost.toFixed(2);
};

submitButton.addEventListener("click", (e) => {
    e.preventDefault;
    performCalculation();
});
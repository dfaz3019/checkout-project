const quantityFieldOne = document.querySelector('.quantity-field-1')
const quantityFieldTwo = document.querySelector('.quantity-field-2')
const quantityFieldThree = document.querySelector('.quantity-field-3')
const quantityFieldFour = document.querySelector('.quantity-field-4')
const quantityFieldFive = document.querySelector('.quantity-field-5')
const quantityFieldSix = document.querySelector('.quantity-field-6')
const fullName = document.querySelector('.text-box-name')
const address = document.querySelector('.text-box-address')
const country = document.querySelector('.country-dropdown-menu')
const fieldShippingDetails = document.querySelector('.shipping-details')
const calculateButton = document.querySelector('#calculate-button')
const confirmAddressButton = document.querySelector('#confirm-address-button')
const resetCart = document.querySelector('#reset-cart')

fullName.addEventListener("input", () => {
    if (fullName.value === "") {
        confirmAddressButton.disabled = true;

    } else {
        confirmAddressButton.disabled = false;
    }
})

fullName.addEventListener("blur", () => {
    if (!fullName.value == "") {
        document.querySelector(".nameError").classList.add("hide");
    } else {
        document.querySelector(".nameError").classList.remove("hide");
    }
})

confirmAddressButton.addEventListener('click', (e) => {
    e.preventDefault()
    const confirmAddress = `<p>We will send this package to ${fullName.value} at ${address.value}, ${country.value}</p>`
    const confirmationLabel = document.querySelector('.address-confirmation-message').innerHTML = confirmAddress
})

function calculatePrice (quantityField, cost) {
    if (Number(quantityField.value) == -1) {
        alert('Please select a positive value quantity')
        quantityField.focus()
    } else {
        return Math.round(quantityField.value * cost * 100) / 100
    }
}

calculateButton.addEventListener('click', () => {
    const cartTotalLabel = document.querySelector('.cart-total')
    cartTotal = 
    `Total: $${Math.round(calculatePrice(quantityFieldOne, 18.52) + calculatePrice(quantityFieldTwo, 15.00) + 
     calculatePrice(quantityFieldThree, 31.52) + calculatePrice(quantityFieldFour, 9.82) + 
     calculatePrice(quantityFieldFive, 14.82) + calculatePrice(quantityFieldSix, 6.82))}`
     cartTotalLabel.innerHTML = cartTotal
})

resetCart.addEventListener('click', () => {
    quantityFieldOne.value = 0 
    quantityFieldTwo.value = 0 
    quantityFieldThree.value = 0 
    quantityFieldFour.value = 0 
    quantityFieldFive.value = 0 
    quantityFieldSix.value = 0 
})
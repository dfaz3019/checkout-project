const quantityFieldOne = document.querySelector('.quantity-field-1')
const quantityFieldTwo = document.querySelector('.quantity-field-2')
const quantityFieldThree = document.querySelector('.quantity-field-3')
const quantityFieldFour = document.querySelector('.quantity-field-4')
const quantityFieldFive = document.querySelector('.quantity-field-5')
const quantityFieldSix = document.querySelector('.quantity-field-6')

document.querySelector('#calculate-button').addEventListener('click', () => {
    if (Number(quantityFieldOne.value) == -1) {
        alert('Please select a positive value quantity')
        quantityFieldOne.focus()
    } else {
        document.querySelector('.cart-total').innerHTML = ""
        document.querySelector('.cart-total').append(`Total is: $${Math.round(quantityFieldOne.value * 18.52 * 100) / 100}`)
    }
})
const fullName = document.querySelector('.text-box-name')
const address = document.querySelector('.text-box-address')
const country = document.querySelector('.country-dropdown-menu')
const fieldShippingDetails = document.querySelector('.shipping-details')
const calculateButton = document.querySelector('#calculate-button')
const confirmAddressButton = document.querySelector('#confirm-address-button')

// document.addEventListener('DOMContentLoaded', () => {
//     if (fullName.value === "") {
//         confirmAddressButton.disabled = true;
//     } else {
//         confirmAddressButton.disabled = false;
//     }

// })    

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

document.querySelector('#confirm-address-button').addEventListener('click', (e) => {
    e.preventDefault()
    const confirmAddress = `<p>We will send this package to ${fullName.value} at ${address.value}, ${country.value}</p>`
    const confirmationLabel = document.querySelector('.address-confirmation-message').innerHTML = confirmAddress
})


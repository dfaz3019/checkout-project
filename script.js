const quantityFieldOne = document.querySelector('.quantity-field-1')
const quantityFieldTwo = document.querySelector('.quantity-field-2')
const quantityFieldThree = document.querySelector('.quantity-field-3')
const quantityFieldFour = document.querySelector('.quantity-field-4')
const quantityFieldFive = document.querySelector('.quantity-field-5')
const quantityFieldSix = document.querySelector('.quantity-field-6')

document.querySelector('#calculate-button').addEventListener('click', () => {
    if(Number(quantityFieldOne.value) == -1) {
        alert('Please select a positive value quantity')
    } else {
    document.querySelector('.cart-total').innerHTML = ""
    document.querySelector('.cart-total').append(`Total is: $${Math.round(quantityFieldOne.value * 18.52 * 100) / 100}`)
    }
})

const fullName = document.querySelector('.name')
const address = document.querySelector('.address')
const country = document.querySelector('.country-dropdown-menu')
const fieldShippingDetails = document.querySelector('.shipping-details')

document.querySelector('#confirm-address-button').addEventListener('click', () => {
    const confirmAddress = `<p>We will send this package to ${fullName.value} at ${address.value}, ${country.value}</p>`
    const confirmationLabel = document.querySelector('.address-confirmation-message').innerHTML = confirmAddress
})

document.querySelector('.text-box-name').addEventListener('mouseenter', () => {
    document.querySelector('.text-box-one').style.backgroundColor = 'lightgray'
})

document.querySelector('.text-box-name').addEventListener('mouseleave', () => {
    document.querySelector('.text-box-one').style.backgroundColor = 'white'
})

document.querySelector('.text-box-address').addEventListener('mouseenter', () => {
    document.querySelector('.text-box-two').style.backgroundColor = 'lightgray'
})

document.querySelector('.text-box-address').addEventListener('mouseleave', () => {
    document.querySelector('.text-box-two').style.backgroundColor = 'white'
})


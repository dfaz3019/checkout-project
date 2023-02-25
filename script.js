// const grabField = document.querySelector('.wow-time')

// document.querySelector('#calculate-button').addEventListener('click', () => {
//     document.querySelector('.cart-total').value = grabField.value * 15
// })


const quantityFieldOne = document.querySelector('.quantity-field-1')
const quantityFieldTwo = document.querySelector('.quantity-field-2')
const quantityFieldThree = document.querySelector('.quantity-field-3')
const quantityFieldFour = document.querySelector('.quantity-field-4')
const quantityFieldFive = document.querySelector('.quantity-field-5')
const quantityFieldSix = document.querySelector('.quantity-field-6')

const checkIfNegative = -1


document.querySelector('#calculate-button').addEventListener('click', () => {
    if(Number(quantityFieldOne.value) == -1) {
        alert('Please select a positive value quantity')
    } else {
    document.querySelector('.cart-total').innerHTML = ""
    document.querySelector('.cart-total').append(`Total is: $${Math.round(quantityFieldOne.value * 18.52 * 100) / 100}`)
    }
})


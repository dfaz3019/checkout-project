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
const shippingBreakdown = document.querySelector('.shipping-breakdown')
const clock = document.querySelector('.clock')
const paySection = document.querySelector('#pay-section')
let apiKey = 'Ap7mbRfhsD5lRt_3M22qSk-FpNb3GTLcZwTN5R3kKFPf6K6uiRGD8lvS8DXEe4SQ'

/*DATE AND CLOCK*/

document.addEventListener('DOMContentLoaded', () => {
    const date = new Date()
    day = date.getDay()
    month = date.getMonth()
    date.toDateString

    document.querySelector('.date').textContent = date.toDateString()
})

setInterval(updateTime, 1000)

function updateTime() {
    const time = new Date()
    const getHours = time.getHours()
    var getMinutes = time.getMinutes()
    var getSeconds = time.getSeconds()

    if (time.getSeconds() < 10) {

        var getSeconds = '0'+time.getSeconds()
    }

    if(time.getMinutes() < 10) {
        
        var getMinutes = '0'+time.getMinutes()
    }

    clock.innerHTML = `${getHours}:${getMinutes}:${getSeconds}`
}

/* FORM VALIDATION FOR ADDRESS FIELDS */

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
    paySection.style.height = '450px'
    const confirmAddress = `<p>We will send this package to ${fullName.value} at ${address.value}, ${country.value}</p>`
    const confirmationLabel = document.querySelector('.address-confirmation-message').innerHTML = confirmAddress
})

/* PRICE CALCULATOR + ITEM QUANTITY CALCULATOR */

function calculatePrice (quantityField, cost) {
    if (Number(quantityField.value) == -1) {
        alert('Please select a positive value quantity')
        quantityField.focus()
    } else {
        return Math.round(quantityField.value * cost * 100) / 100
    }
}

function getValueAsInt (quantityField) {
    return parseInt(quantityField, 10)
}

calculateButton.addEventListener('click', () => {
    const cartTotalLabel = document.querySelector('.cart-total')
    cartTotal = 
    `Total: $${(calculatePrice(quantityFieldOne, 18.52) + calculatePrice(quantityFieldTwo, 15.00) + 
     calculatePrice(quantityFieldThree, 31.52) + calculatePrice(quantityFieldFour, 9.82) + 
     calculatePrice(quantityFieldFive, 14.82) + calculatePrice(quantityFieldSix, 6.82)).toFixed(2)}`
     cartTotalLabel.innerHTML = cartTotal
     shippingBreakdown.innerHTML = `Item Quantity: ${getValueAsInt(quantityFieldOne.value) + getValueAsInt(quantityFieldTwo.value) + getValueAsInt(quantityFieldThree.value) +
        getValueAsInt(quantityFieldFour.value) + getValueAsInt(quantityFieldFive.value) + getValueAsInt(quantityFieldSix.value)}<br>`
})

/* CART RESET BUTTON */

resetCart.addEventListener('click', () => {
    quantityFieldOne.value = 0 
    quantityFieldTwo.value = 0 
    quantityFieldThree.value = 0 
    quantityFieldFour.value = 0 
    quantityFieldFive.value = 0 
    quantityFieldSix.value = 0 
})

/* MAP */

function GetMap()

   {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: apiKey,
        center: new Microsoft.Maps.Location(-33.811889, 151.0245449),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17,
        disableScrollWheelZoom: true,
        disablePanning: true
    });

    var uniLocation = new Microsoft.Maps.Location(-33.811889, 151.0245449)
    
    var pin = new Microsoft.Maps.Pushpin(uniLocation, {
        title: 'Western Sydney University',
        subTitle: 'WAT',
    });

    map.entities.push(pin);

    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });

    infobox.setMap(map);

    pin.metadata = {
        title: 'Western Sydney University',
        description: `Where we'll be for computer science [h]`
    };

    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);

    function pushpinClicked(e) {
        if (e.target.metadata) {
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });

        }
    }
}


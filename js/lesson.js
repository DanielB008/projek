// PHONE CHECKER

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneResult = document.querySelector("#phone_result");

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneResult.innerText = 'OK'
        phoneResult.style.color = 'green'
    } else {
        phoneResult.innerText = 'ERROR'
        phoneResult.style.color = 'red'
    }
}


const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabsParent = document.querySelector(".tab_content_items");

let tabIndex = 0

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}


const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}


hideTabContent();
showTabContent();

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent();
                showTabContent(index);
            }
        })
    }
}
interval = setInterval(() => {
    tabIndex++
    if (tabIndex >= tabContentBlocks.length) {
        tabIndex = 0
    }
    hideTabContent()
    showTabContent(tabIndex)
}, 3000)

// CONVERTER

// DRY - Dont Repeat Yourself
// KISS - Keep It Super Simple
// CRUD - Create Read Update Delete
// SOLID
//AJAX


const usdInput = document.querySelector('#usd');
const somInput = document.querySelector('#som');
const euroInput = document.querySelector('#eur');

const converter = (element, targetElement, targetElement2) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open("GET",  "../data/converter.json")
        request.setRequestHeader("Content-type", "application/json")
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response);
            const value = parseFloat(element.value);


            if (targetElement.id === 'usd' || targetElement2.id === 'usd') {
                if (element.id === 'som') {
                    usdInput.value = (value / data.usd).toFixed(2);
                } else if (element.id === 'eur') {
                    usdInput.value = (value * data.eur / data.usd).toFixed(2);
                }
            }
            if (targetElement.id === 'som' || targetElement2.id === 'som') {
                if (element.id === 'usd') {
                    somInput.value = (value * data.usd).toFixed(2);
                } else if (element.id === 'eur') {
                    somInput.value = (value * data.eur).toFixed(2);
                }
            }
            if (targetElement.id === 'eur' || targetElement2.id === 'eur') {
                if (element.id === 'usd') {
                    euroInput.value = (value * data.usd / data.eur).toFixed(2);
                } else if (element.id === 'som') {
                    euroInput.value = (value / data.eur).toFixed(2);
                }
            }
            if (element.value === '') {
                targetElement.value = ''
                targetElement2.value = ''
            }
        }
    }
}


converter(somInput, usdInput, euroInput)
converter(usdInput, somInput, euroInput)
converter(euroInput, somInput, usdInput)


// converter(somInput, usdInput);
// converter(usdInput, somInput);
//
// converter(somInput, euroInput);
// converter(euroInput, somInput);
//
// converter(usdInput, euroInput);
// converter(euroInput, usdInput);


// card switcher

const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
const cardBlock = document.querySelector('.card')
let cardId = 0
const maxId = 200
const minId = 1

btnNext.onclick = async () => {
    try {
        cardId++
        if (cardId > maxId) {
            cardId = minId
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
        cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? "green" : "red"} " >${data.completed}</p>
            <span>${data.id}</span>
            `
    } catch (e) {
        console.log(e)
    }
}

btnPrev.onclick = async () => {
    try {
        cardId--
        if (cardId < minId) {
            cardId = maxId
        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        const data = await response.json()
        cardBlock.innerHTML = `
            <p>${data.title}</p>
            <p style="color: ${data.completed ? "green" : "red"} " >${data.completed}</p>
            <span>${data.id}</span>
            `
    } catch (e) {
        console.log(e)
    }
}

// WEATHER
// API key - e417df62e04d3b1b111abeab19cea714
// query params -

const searchInput = document.querySelector('.cityName')
const searchButton = document.querySelector('#search')
const cityName = document.querySelector('.city')
const cityTemp = document.querySelector('.temp')

const API_KEY = "e417df62e04d3b1b111abeab19cea714"
const BASE_URL = "http://api.openweathermap.org/data/2.5/weather"

searchButton.onclick = async () => {
    try {
        if (searchInput.value !== '') {
            const response = await fetch(`${BASE_URL}?appid=${API_KEY}&q=${searchInput.value}&units=metric&lang=ru`)
            const data = await response.json()
            if (data.cod === '404') {
                cityName.innerHTML = 'Город не найден'
            } else {
                cityName.innerHTML = data.name
                cityTemp.innerHTML = Math.round(data.main.temp) + "&deg;C"
            }


            searchInput.value = ''
        } else {
            cityName.innerHTML = 'Введите название города'
            cityTemp.innerHTML = ''
        }
    } catch (e) {
        console.log(e)
    }
}




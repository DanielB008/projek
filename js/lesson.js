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

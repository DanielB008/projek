//1
const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)) {
        gmailResult.innerText = 'yes'
        gmailResult.style.color = 'green'
    } else {
        gmailResult.innerText = 'no'
        gmailResult.style.color = 'red'
    }
}
//2

const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

let positionX = 0, positionY = 0

const maxWidth = parentBlock.clientWidth - childBlock.clientWidth
const maxHeight = parentBlock.clientHeight - childBlock.clientHeight
let direction = 1




const count = () => {
    if (direction === 1) {
        if (positionX < maxWidth) {
            positionX++
            childBlock.style.left = `${positionX}px`
            requestAnimationFrame(count)
        } else {
            direction = 2
            requestAnimationFrame(count)
        }
    } else if (direction === 2) {
        if (positionY < maxHeight) {
            positionY++
            childBlock.style.top = `${positionY}px`
            requestAnimationFrame(count)
        } else {
            direction = 3
            requestAnimationFrame(count)
        }
    } else if (direction === 3) {
        if (positionX > 0) {
            positionX--
            childBlock.style.left = `${positionX}px`
            requestAnimationFrame(count)
        } else {
            direction = 4
            requestAnimationFrame(count)
        }
    } else if (direction === 4) {
        if (positionY > 0) {
            positionY--
            childBlock.style.top = `${positionY}px`
            requestAnimationFrame(count)
        } else {
            direction = 1
            requestAnimationFrame(count)
        }
    }
}

count()

// 3

const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let counter = 0


function display() {
    seconds.textContent = counter;
}

start.addEventListener('click', () => {
    interval = setInterval(() => {
        counter++
        display()
    },500)
})

stop.addEventListener('click', () => {
    clear = clearInterval(interval)
})

reset.addEventListener('click', () => {
    counter = 0
    display()
})
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

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth

let position = 0

const count = () => {
    if (position < maxWidth) {
        position++
        childBlock.style.left = `${position}px`

        requestAnimationFrame(count)
    }
}

count()



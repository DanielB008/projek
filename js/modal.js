//MODAL WINDOW

const modal = document.querySelector(".modal");
const modalOpenButton = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')



const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}
const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalOpenButton.onclick = openModal
modalCloseButton.onclick = closeModal
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal()
    }
}

const scroll = () => {
    if (window.innerHeight + window.scrollY === document.body.scrollHeight) {
        openModal()
        removeEventListener('scroll', scroll)
    }
}

window.addEventListener('scroll', scroll)

time = setTimeout(() => {
    openModal()
}, 10000)

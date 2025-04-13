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

//4

const charactersList = document.querySelector('.characters-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', '../data/characters.json');

xhr.onload = function() {
    if (xhr.status === 200) {
        const persons = JSON.parse(xhr.response);
        persons.forEach(person => {
            const characterCard = document.createElement('div');
            characterCard.className = 'character-card';

            const characterPhoto = document.createElement('div');
            characterPhoto.className = 'character-photo';

            const characterPhotoImg = document.createElement('img');
            characterPhotoImg.src = person.photo;
            characterPhotoImg.alt = person.name;

            characterPhoto.appendChild(characterPhotoImg);

            characterCard.appendChild(characterPhoto);

            const h3 = document.createElement('h3');
            h3.innerHTML = person.name;
            characterCard.appendChild(h3);


            const age = document.createElement('p');
            age.innerHTML = `Age: ${person.age}`;
            characterCard.appendChild(age);



            charactersList.appendChild(characterCard);
        });
    } else {
        console.log('Ошибка при загрузке персонажей');
    }
};

xhr.send();

// 5

xhr2 = new XMLHttpRequest();
xhr2.open('GET', '../data/any.json')
xhr2.setRequestHeader('Content-Type', 'application/json');


xhr2.onload = function() {
    if (xhr2.status === 200) {
        const info = JSON.parse(xhr2.response);
        console.log(info);
    }
}


xhr2.send()
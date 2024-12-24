let timeSpan = document.getElementById('time')
const firstProject = document.getElementById('firstComputerProject')
const firstProjectImage = document.getElementById('firstComputerProjectImg')
const secondProject = document.getElementById('secondComputerProject')
const secondProjectImage = document.getElementById('secondComputerProjectImg')
const thirdProject = document.getElementById('thirdComputerProject')
const thirdProjectImage = document.getElementById('thirdComputerProjectImg')

const programming = '10-23-2024'
const programmingDate = new Date(programming)
const intlNumberFormatter = new Intl.NumberFormat('en-us')

firstProject.addEventListener('click', () => {
    firstProjectImage.classList.toggle('hidden')
})

secondProject.addEventListener('click', () => {
    secondProjectImage.classList.toggle('hidden')
})

thirdProject.addEventListener('click', () => {
    thirdProjectImage.classList.toggle('hidden')
})

setInterval(() => {
    const now = new Date();
    const difference = Math.floor(
        (now.getTime() - programmingDate.getTime()) / 1000
    );

    timeSpan.innerText = intlNumberFormatter.format(difference);
}, 1000);
const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('button');

function generateRandomInt() {
    return Math.floor(Math.random() * 255) + 1;
}
function getRandomColor() {
    let redC = generateRandomInt();
    let greenC = generateRandomInt();
    let blueC = generateRandomInt();

    return `rgb(${redC}, ${greenC}, ${blueC})`
}
buttonEl.addEventListener('click', function () {
    bodyEl.style.backgroundColor = getRandomColor();
    buttonEl.style.backgroundColor = `rgba(0,0,0,.6)`;
    buttonEl.style.color = '#fff';
})
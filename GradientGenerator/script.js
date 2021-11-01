const bodyEl = document.querySelector('body');
const showColor = document.querySelector('h2');
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
    let color1 = getRandomColor();
    let color2 = getRandomColor();
    bodyEl.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    buttonEl.style.backgroundColor = `rgba(0,0,0,.6)`;
    buttonEl.style.color = '#fff';
    showColor.textContent= `linear-gradient(to right, ${color1}, ${color2})`;
})
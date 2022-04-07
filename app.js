let count = 0;
let number = document.querySelector('.number');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset')
const decrease = document.getElementById('decrease');

increase.addEventListener('click', () => {
    count = count + 1;
    number.textContent = count;
    if (count > 0) {
        number.style.color = 'green';
    } else if (count === 0) {
        number.style.color = "hsl(209, 61%, 16%)";
    }
    console.log(count);
})
decrease.addEventListener('click', () => {
    count = count - 1
    number.textContent = count;
    if (count < 0) {
        number.style.color = "red";
    }
    else if (count === 0) {
        number.style.color = "hsl(209, 61%, 16%)";
    }
    console.log(count);
})
reset.addEventListener('click', () => {
    count = 0
    number.textContent = count;
    number.style.color = "hsl(209, 61%, 16%)";
})

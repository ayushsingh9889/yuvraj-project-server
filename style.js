let count = 0;

const button = document.getElementById("counter-button");
const display = document.getElementById("counter-display");

button.addEventListener("click", () => {
    count++;
    display.textContent = `You clicked ${count} times`;
});
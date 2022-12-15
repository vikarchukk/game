let clicks = 1;

const timeOut = 5000;

const display = document.getElementById('display');
const button = document.getElementById('button');
const counter = document.getElementById('counter');
const reset = document.getElementById('reset');

button.onclick = start;

function start() {
    const startTime = Date.now();

    display.textContent = formatTime(timeOut);

    const interval = setInterval(() => {
    	const delta = Date.now() - startTime;
    	display.textContent = formatTime(timeOut - delta);
    }, 100);

	button.onclick = () => counter.textContent = clicks++;

	const timeout = setTimeout(() => {
		button.onclick = null;
		display.textContent = "Game Over";
		reset.textContent = "Reset";
		reset.classList.add('res-style');
		reset.onclick = () => location.reload();


		clearInterval(interval);
		clearTimeout(timeout);
	}, timeOut);
}

function formatTime (ms) {
	return Number.parseFloat(ms / 1000).toFixed(2);
}
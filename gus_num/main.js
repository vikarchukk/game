var display = document.querySelector('.display');
var text = document.querySelector('.text');
var tryy = document.querySelector('#try');

var numTry = 7;

var number = Math.floor(Math.random() * 100);

text.focus();

start();

function start() {
  text.addEventListener('keydown', function(n) {
    if (n.keyCode === 13) {
      var num = this.value;
      if (num > 0 && num < 101) {
        tryy.textContent = --numTry;
        console.log(num + "..." + number);

        if (num > number) {
            display.textContent = "? > " + num;
        } else if (num < number) {
            display.textContent = "? < " + num;
        } else if (num == number) {
            display.textContent = "Game Win";
            setTimeout(function t() {
                location.reload();
            }, 2000);
        }
      }
      if (numTry == 0) {
        display.textContent = "Game Over";
        setTimeout(function t() {
            location.reload();
        }, 2000);
      }
    }
  });
};
const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (/[0-9+\-*/.()]/.test(key)) {
    appendValue(key);
  } else if (key === 'Enter') {
    e.preventDefault();
    calculate();
  } else if (key === 'Escape' || key === 'c' || key === 'C') {
    clearDisplay();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  }
});

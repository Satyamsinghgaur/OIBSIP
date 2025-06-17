let display = document.getElementById("display");

function appendNumber(num) {
  display.value += num;
}

function appendOperator(operator) {
  if (display.value === "") return;
  const lastChar = display.value.slice(-1);
  if ("+-*/%".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

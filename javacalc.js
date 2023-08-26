function addNumber(number) {
    var display = document.getElementById("display");
    display.value += number;
  }
  
  function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
  }
  
  function equal() {
    var display = document.getElementById("display");
    var value = eval(display.value);
    display.value = value;
  }

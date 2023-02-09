const calculatorForm = document.getElementById('calculator');
let num1 = '';
let num2 = '';
let operator = '';
let result = '';

calculatorForm.addEventListener('click', (event) => {
  const target = event.target;
  console.log(target.innerText);


  function calculate(num1, num2, operator) {
    num1 = Number(num1);
    num2 = Number(num2);
  
    let result = 0;
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = num1 / num2;
    }
    return result;
  }



  if (target.classList.contains('key')) {
    if (operator === '') {
      num1 += target.innerText;
      document.getElementById('display').value = num1;
    } else {
      num2 += target.innerText;
      document.getElementById('display').value = num2;
    }
  } else if (target.classList.contains('operator')) {
    operator = target.innerText;
  } else if (target.id === 'equals') {
    result = calculate(num1, num2, operator);
    document.getElementById('display').value = result;
    result = ''; // reset the result variable
  }
});


const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', (event) => {
  // Reset the calculator here
});
'use strict';

const buttonElement = document.querySelector('button');
const messageElement = document.getElementById('error-message');
const emailElement = document.getElementById('email');

buttonElement.addEventListener('click', processInput);

emailElement.addEventListener('keypress', function(event) {
  hideErrorElement();
  if (event.key === 'Enter') processInput();
});


function processInput() {
  const userInput = emailElement.value;
  if (userInput === '') {
    messageElement.innerText = 'Oops! Please add your email';
    showErrorElement();
  } else if (!validateEmail(userInput)) {
    messageElement.innerText = 'Oops! Please check your email';
    showErrorElement();
  } else {
    clearInputElement();
  }
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

function showErrorElement() {
  messageElement.classList.remove('hidden');
}

function hideErrorElement() {
  messageElement.classList.add('hidden');
}

function clearInputElement() {
  emailElement.value='';
}


'use strict';

const buttonElement = document.querySelector('.js-button');
const messageElement = document.querySelector('.js-error-message');
const emailElement = document.querySelector('.js-email');


buttonElement.addEventListener('click', processInput);

emailElement.addEventListener('keypress', function(event) {
  hideErrorElement();
  if (event.key === 'Enter') processInput();
});


function processInput(event) {
  if (event) event.preventDefault();
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
  messageElement.classList.remove('js-hidden');
}

function hideErrorElement() {
  messageElement.classList.add('js-hidden');
}

function clearInputElement() {
  emailElement.value='';
}

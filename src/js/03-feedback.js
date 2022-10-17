import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 500));

const MESSAGE_KEY = 'feedback-form-state';

const inputObj = { email: '', message: '' };

populateTextarea();

function onFormSubmit(element) {
  element.preventDefault();
  element.currentTarget.reset();
  const savedObj = JSON.parse(localStorage.getItem(MESSAGE_KEY));
  if (localStorage.getItem(MESSAGE_KEY)) {
    console.log(savedObj);
  } 
  
  localStorage.removeItem(MESSAGE_KEY);
}

function onFormInput(element) {
  inputObj[element.target.name] = element.target.value;
  const stringKey = JSON.stringify(inputObj);
  localStorage.setItem(MESSAGE_KEY, stringKey);
}

function populateTextarea() {
  const savedMessage = JSON.parse(localStorage.getItem(MESSAGE_KEY));
  if (savedMessage) {
    inputObj.email = savedMessage.email;
    inputObj.message = savedMessage.message;
    inputEl.value = savedMessage.email;
    textareaEl.value = savedMessage.message;
  }
}

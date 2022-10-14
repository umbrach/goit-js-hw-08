import throttle from 'lodash.throttle';

const MASSAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onEmailInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();
populateEmail();

function onFormSubmit(element) {
  element.preventDefault();
    element.target.reset();
    localStorage.removeItem(MASSAGE_KEY);
}

function onEmailInput(element) {
    const email = element.target.value;
    localStorage.setItem(MASSAGE_KEY, email);
    console.log(email)
}

function populateEmail() {
  const savedEmail = localStorage.getItem(MASSAGE_KEY);
  if (savedEmail) {
    refs.input.value = savedEmail;
  }
}

function onTextareaInput(element) {
  const message = element.target.value;
    localStorage.setItem(MASSAGE_KEY, message);
    console.log(message);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(MASSAGE_KEY);
  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

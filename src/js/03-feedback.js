import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name="email"]'),
    message: document.querySelector('[name="message"]')
}


refs.form.addEventListener('submit', onFormSubmit);
refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.message.addEventListener('input', throttle(onMessageInput, 500));

const objectValue = {
    email: '',
    message: '',
};

const STORAGE_KEY ="feedback-form-state";

populateEmail();
function populateEmail () {
    const savedEmail = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedEmail) {
        
        objectValue.email = savedEmail.email;
        
        refs.email.value = savedEmail.email;
    }
   
}
populateMessage();
function populateMessage () {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (savedMessage) {
        
        objectValue.message = savedMessage.message;
       
        refs.message.value = savedMessage.message;
    }
   
}

function onFormSubmit (evt) {
   evt.preventDefault();
   evt.currentTarget.reset();
   localStorage.removeItem(STORAGE_KEY)
   console.log(objectValue)
}

function onEmailInput (evt) {
    objectValue.email = evt.target.value;
   
 localStorage.setItem(STORAGE_KEY, JSON.stringify(objectValue));
 
}

function onMessageInput (evt) {
    objectValue.message = evt.target.value;
   
    localStorage.setItem(STORAGE_KEY, JSON.stringify(objectValue));
}



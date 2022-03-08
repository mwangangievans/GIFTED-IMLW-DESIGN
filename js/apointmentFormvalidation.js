const form = document.getElementById('form');
const  exampleFormControlSelect1 = document.getElementById('exampleFormControlSelect1');
const date = document.getElementById('date');
const location = document.getElementById('location');
//const time = document.getElementById('time');
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const Email = document.getElementById('Email');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;exampleFormControlSelect1
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const exampleFormControlSelect1Value = usernaexampleFormControlSelect1me.value.trim();
    const dateValue = date.value.trim();
    const locationValue = location.value.trim();
    //const timeValue = time.value.trim();
    const fullNameValue = fullName.value.trim();
    const phoneValue = phone.value.trim();
    const EmailValue = Email.value.trim();
    const messageValue = message.value.trim();


    if(exampleFormControlSelect1Value === '') {
        setError(exampleFormControlSelect1, 'Select a service');
    } else {
        setSuccess(exampleFormControlSelect1);
    }
    if(locationValue === '') {
      setError(location, 'Specify location');
  } else {
      setSuccess(location);
  } 
  if(fullNameValue === '') {
    setError(fullName, 'enter your name');
} else {
    setSuccess(fullName);
}
if(phoneValue === '') {
  setError(phone, 'enter phone number');
} else {
  setSuccess(phone);
}

if(messageValue === '') {
  setError(message, 'leave a message');
} else {
  setSuccess(message);
}

    if(EmailValue === '') {
        setError(Email, 'Email is required');
    } else if (!isValidEmail(EmailValue)) {
        setError(Email, 'Provide a valid email address');
    } else {
        setSuccess(Email);
    }

    if(dateValue === '') {
        setError(date, 'date is required');}
   else {
        setSuccess(date);
    }


};

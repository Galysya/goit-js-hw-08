import  throttle  from 'lodash.throttle';

const refs = {
      formElem: document.querySelector('.feedback-form'),
    };

    refs.formElem.addEventListener('input', throttle (onFormElemInput, 500));

    refs.formElem.addEventListener('submit', onFormElemSubmit);


function onFormElemInput(evt) {
      const userForm = {};
      userForm.email = refs.formElem.elements.email.value;
      userForm.message = refs.formElem.elements.message.value;
    
localStorage.setItem("feedback-form-state", JSON.stringify(userForm))
 }

function onFormElemSubmit(e) {
  e.preventDefault();
  const data = JSON.parse(localStorage.getItem("feedback-form-state"))|| {};
  localStorage.removeItem('feedback-form-state');
  e.target.reset();
  console.log(data);
}

function onLoad() {
  const data = JSON.parse(localStorage.getItem("feedback-form-state"))|| {};
console.log(data);
  for (const key of Object.keys(data)) {
    refs.formElem.elements[key].value = data[key];
  }
}
onLoad();


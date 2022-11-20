import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
  };
  
  refs.form.addEventListener('input', throttle(onInputs, 500));
  refs.form.addEventListener('submit', onSubmit);
  
  
  let newLSValues = {
      email: '',
      message: '',
  };
  


  function onInputs(event) {
      
      if (event.target.type === 'email') {
        newLSValues.email = event.target.value;
      } else {
        newLSValues.message = event.target.value;
      }
      
      saveValues();
  }
  
  function saveValues() {
      localStorage.setItem('feedback-form-state', JSON.stringify(newLSValues))
  }
  
  
  const LSValues = localStorage.getItem('feedback-form-state')
  if (!LSValues) {
    return
  }else{
     const getLSValues = JSON.parse(localStorage.getItem('feedback-form-state'))
     
     refs.input.value = getLSValues.email
     refs.textarea.value = getLSValues.message

     newLSValues.email =  getLSValues.email
     newLSValues.message = getLSValues.message
  
  

  }
  
  function onSubmit(event){

    event.preventDefault()
    
    console.log(newLSValues)
    
    localStorage.removeItem('feedback-form-state')
    
    refs.form.reset()
  }
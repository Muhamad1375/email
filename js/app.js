/*******************/
//variables
/*******************/
const sendBtn = document.getElementById('sendBtn'),
      email = document.getElementById('email'),
      subject = document.getElementById('subject'),
      message = document.getElementById('message'),
      resetBtn = document.getElementById('resetBtn'),
      sendEmailForm = document.getElementById('email-form');




/*******************/
//event listeners
/*******************/
eventListeners();

function eventListeners() {
      //app init
      document.addEventListener('DOMContentLoaded', appInit);

      //Validate the forms
      email.addEventListener('blur', validateField);
      subject.addEventListener('blur', validateField);
      message.addEventListener('blur', validateField);

      resetBtn.addEventListener('click', resetForm);

}


/*******************/
//functions
/*******************/

//app Initialization
function appInit() {

      sendBtn.disabled = true;
}


      //show the spinner
      
      //show the image
      


      //hide the spinner after 5 sec then show the send email
      
            //hide spinner

            //show the image
            //hide the image
         

//Validate the fields
function validateField() {
      let errors;
      //validate the lenght of the field
      validateLength(this);
      // validate the email
      if(this.type === 'email') {
            validateEmail(this);
      }
            //Both will return errors then check if there are any errors
            errors = document.querySelectorAll('.error');
            //check that the inputs are not empty
            if (email.value !== '' & subject.value !== '' & message.value !== '') {
                  if(errors.length === 0) {
                        sendBtn.disabled = false;
                  }
            }
      
}
//validate the lenght of the field
function validateLength(field) {
      if(field.value.length > 0 ){
            field.style.borderBottomColor = 'green';
            field.classList.remove('error');
      }else {
            field.style.borderBottomColor = 'red';
            field.classList.add('error');
      }
}
      





//validate email check for @ in the value
function validateEmail(field) {
      let emailText = field.value;
      if(emailText.indexOf('@') !== -1) {
            field.style.borderBottomColor = 'green';
            field.classList.remove('error');
      }else {
            field.style.borderBottomColor = 'red';
            field.classList.add('error');
      }
}
      

//reset the form
function resetForm() {
      sendEmailForm.reset();
}
      
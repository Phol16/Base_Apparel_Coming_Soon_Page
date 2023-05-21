
const errorMessage = document.querySelector('.errorMessage') as HTMLParagraphElement
const errorIcon = document.querySelector('.errorIcon') as HTMLParagraphElement
const inputForm = document.querySelector('.inputForm') as HTMLFormElement

const email = document.querySelector('#email') as HTMLInputElement
const submitButton = document.querySelector('#submitButton') as HTMLButtonElement

const emailRegEx = /^([\w].\S*)+(@.\S*)+\.([a-z]{2,8})/gi


submitButton.addEventListener('click',(e)=>{
  e.preventDefault();

  if (emailRegEx.test(email.value)) {
    errorMessage.classList.remove('visible');
    errorIcon.classList.remove('visible');
  
    inputForm.classList.remove('borderError');
    inputForm.classList.remove('borderNormal');
    inputForm.classList.add('borderSuccess');
  } else {
    errorMessage.classList.add('visible');
    errorIcon.classList.add('visible');
  
    inputForm.classList.remove('borderSuccess');
    inputForm.classList.remove('borderNormal');
    inputForm.classList.add('borderError');
  }
})

email.addEventListener('input',()=>{
  errorMessage.classList.remove('visible')
  errorIcon.classList.remove('visible')
  
  inputForm.classList.remove('borderSuccess');
  inputForm.classList.remove('borderError')
  inputForm.classList.add('borderNormal')
})
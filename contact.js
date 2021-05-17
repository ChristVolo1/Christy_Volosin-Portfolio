const inputs = document.querySelectorAll(".input")
/* const name = document.getElementById("name").value;
const phone = document.getElementById("phone").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
const form = document.getElementById("form");
const errorElement = document.getElementById("error_message"); */

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc)
  });
  
  /* form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
      messages.push('Name is required')
    }

    if(name.length < 3) {
      messages.push('Please enter valid name')
    }

    if(isNaN(phone) || phone.length != 10) {
      messages.push('Please enter valid phone number')
    }

    if(email === '') {
      messages.push('Email is required')
    }

    if(email.indexOf("@") == -1 || email.length < 6) {
      messages.push('Please enter valid email')
    }

    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join(', ')
    }
    
  }) */


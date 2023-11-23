function validateForm() {
    const form = document.getElementById('form');
    const errors = document.querySelectorAll('.error');
    let valid = true;
  
    // Validate Full Name
    const nameInput = document.getElementById('name');
    const nameError = nameInput.nextElementSibling;
    if (!nameInput.value) {
      valid = false;
      nameError.innerText = '*Full Name is required';
    } else {
      nameError.innerText = '';
    }
  
    // Validate Email
    const emailInput = document.getElementById('email');
    const emailError = emailInput.nextElementSibling;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailInput.value)) {
      valid = false;
      emailError.innerText = '*Invalid email format';
    } else {
      emailError.innerText = '';
    }
  
    // Validate Username
    const usernameInput = document.getElementById('username');
    const usernameError = usernameInput.nextElementSibling;
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameInput.value) {
      valid = false;
      usernameError.innerText = '*Username is required';
    } else if (!usernameRegex.test(usernameInput.value)) {
      valid = false;
      usernameError.innerText = '*Username must contain only digits, letters, and underscores';
    } else if(usernameInput.value[0].match(/[0-9]/) || usernameInput.value[0].match("_")){
      valid = false;
      usernameError.innerText = '*Username cannot start with a digit or underscore';
    }else {
    usernameError.innerText = '';
    }

    //validate address
    const addressInput = document.getElementById('address');
    const addressError = addressInput.nextElementSibling;
    if (!addressInput.value) {
      valid = false;
      addressError.innerText = '*Address is required';
    } else {
      addressError.innerText = '';
    }
  
    // Validate Password
    const passwordInput = document.getElementById('password');
    const passwordError = passwordInput.nextElementSibling;
    if (!passwordInput.value) {
      valid = false;
      passwordError.innerText = '*Password is required';
    } else if (passwordInput.value.length < 8) {
    valid = false;
    passwordError.innerText = '*Password must be at least 8 characters long';
    } else {
      passwordError.innerText = '';
    }
  

  
    if (!valid) {
      event.preventDefault(); // Prevent form submission
    }
  
    return valid;
    
}



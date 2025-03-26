document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("cpassword");
  const messageDiv = document.getElementById("validation-message");

  function validateName(value) {
    return /^[A-Za-z\s]+$/.test(value.trim());
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function validatePassword(value) {
    return value.length >= 6;
  }

  function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.opacity = 1;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isFormValid = true;

    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(
      (input) => {
        input.classList.remove("invalid");
      }
    );

    if (!validateName(nameInput.value)) {
      showMessage("Name must contain only letters", "error");
      nameInput.classList.add("invalid");
      isFormValid = false;
    }

    if (!validateEmail(emailInput.value)) {
      showMessage("Invalid email format", "error");
      emailInput.classList.add("invalid");
      isFormValid = false;
    }

    if (!validatePassword(passwordInput.value)) {
      showMessage("Password must be at least 6 characters", "error");
      passwordInput.classList.add("invalid");
      isFormValid = false;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      showMessage("Passwords do not match", "error");
      confirmPasswordInput.classList.add("invalid");
      isFormValid = false;
    }

    if (isFormValid) {
      showMessage("Registration Successful!", "success");
      form.reset();
    }
  });

  nameInput.addEventListener("input", function () {
    this.classList.toggle("invalid", !validateName(this.value));
  });

  emailInput.addEventListener("input", function () {
    this.classList.toggle("invalid", !validateEmail(this.value));
  });

  passwordInput.addEventListener("input", function () {
    this.classList.toggle("invalid", !validatePassword(this.value));
  });

  confirmPasswordInput.addEventListener("input", function () {
    this.classList.toggle("invalid", this.value !== passwordInput.value);
  });
});

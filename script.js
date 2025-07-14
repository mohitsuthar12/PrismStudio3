function validateForm() {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      const nameError = document.getElementById("nameError");
      const emailError = document.getElementById("emailError");
      const messageError = document.getElementById("messageError");
      const submitBtn = document.getElementById("myBtn");

      // Clear previous errors
      nameError.textContent = "";
      emailError.textContent = "";
      messageError.textContent = "";

      let isValid = true;

      // Validate name
      if (name.length < 3) {
        nameError.textContent = "Full Name must be at least 3 characters.";
        isValid = false;
      }

      // Validate email
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
      if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
      }

      // Validate message
      if (message.length === 0) {
        messageError.textContent = "Message is required.";
        isValid = false;
      } else if (message.length > 500) {
        messageError.textContent = "Message must be 500 characters or fewer.";
        isValid = false;
      }

      // Enable or disable button
      submitBtn.disabled = !isValid;
      return isValid;
    }

    function handleSubmit(event) {
      event.preventDefault(); // prevent form from refreshing
      if (validateForm()) {
        alert("Form submitted successfully!");
        document.getElementById("myBtn").disabled = true;
        document.getElementById("contactForm").reset();
      }
      return false;
    }
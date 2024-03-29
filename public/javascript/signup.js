import { displayStatusMessage, isFormFieldsFilled, makeRequest, validateFields } from './util/util.mjs';

document.addEventListener("DOMContentLoaded", function (event) {
  const firstnameField = document.querySelector(".form-field#firstname");
  const lastnameField = document.querySelector(".form-field#lastname");
  const usernameField = document.querySelector(".form-field#username");
  const passwordField = document.querySelector(".form-field#password");
  const confirmPasswordField = document.querySelector(".form-field#confirmPassword");
  const emailField = document.querySelector(".form-field#email");
  const genderSelect = document.querySelector(".form-field#gender");
  const dobField = document.querySelector(".form-field#dateOfBirth");
  const addressField = document.querySelector(".form-field#address");
  const nationalityField = document.querySelector(".form-field#nationality");
  const customerRadio = document.querySelector(".form-field#customer");
  const sellerRadio = document.querySelector(".form-field#seller");
  const errorNodes = document.querySelectorAll(".error-message");
  const notify = document.querySelector(".notify");

  // console.log(errorNodes);
  const submitBtn = document.querySelector(".form-field#submit");

  submitBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const validateReport = validateFields(
      firstnameField, 
      lastnameField, 
      usernameField, 
      passwordField, 
      confirmPasswordField,
      emailField,
      genderSelect,
      dobField,
      addressField,
      nationalityField
    );
    
    if (isFormFieldsFilled(errorNodes, validateReport)) {
      let userType = "n/a";
      if (customerRadio.checked) {
        userType = String(customerRadio.value).toLowerCase();
      } else if (sellerRadio.checked) {
        userType = String(sellerRadio.value).toLowerCase();
      }

      const payload = {
        firstname: firstnameField.value,
        lastname: lastnameField.value,
        username: usernameField.value,
        password: passwordField.value,
        email: emailField.value,
        gender: genderSelect.value,
        dob: dobField.value,
        address: addressField.value,
        nationality: nationalityField.value,
      }

      const url = `${
        userType === "customer" ? 
        "http://localhost:8080/api/customers" : 
        "http://localhost:8080/api/sellers"
      }`
      
      // try {
        // Make Http Request!
        const response = await makeRequest(url, "POST", payload);
        const data = await response.json();
  
        if (!data.error) {
          console.log(data);
          displayStatusMessage(notify, "Your Submission was successful!");
            // Get the entered username
            let username = data.user.username;
            localStorage.setItem("username", username);
            //waiting for 5 seconds before redirecting to the login page
            setTimeout(() => {
                // Redirect to the login page with the username as a parameter;
              window.location.href = `login.html`;
            }, 5000);
        } else {
          // Handle error response here...
          displayStatusMessage(notify, data.message, {color: "red"});
        }
      // } catch (error) {
      //   console.error(error.message);
      // }
     // console.log(payload);
      
    }
  });
});
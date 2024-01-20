import { validateSignUpFields, makeRequest } from "./util/util.mjs";
document.addEventListener("DOMContentLoaded", function(event) {
  const firstNameField = document.querySelector("#firstname");
  const lastNameField = document.querySelector("#lastname");
  const userNameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const confirmPasswordField = document.querySelector("#confirmPassword");
  const emailField = document.querySelector("#email");
  const genderField = document.querySelector("#gender");
  const addressField = document.querySelector("#address");
  const nationalityField = document.querySelector("#nationality");
  const dateField = document.querySelector("#date");
  const customerField = document.querySelector("#customer");
  const sellerField = document.querySelector("#seller");
  const errorNodes = document.querySelectorAll(".error-message");

  document.getElementById('submitButton').addEventListener('click', (event) => {
    event.preventDefault();
    const validateReport = validateSignUpFields(
        firstNameField,
        lastNameField,
        userNameField,
        passwordField,
        confirmPasswordField,
        emailField,
        genderField,
        dateField,
        addressField,
        nationalityField,
        customerField,
        sellerField
    );
    let valid = 0;

    //Render erroes on screen if there are any
    for (const report of validateReport){
        errorNodes[report.index].innerHTML = report.errorMessage;
        if(!report.error){
            valid++;
        }
    }

    //Submit the form
    if (validateReport.length === valid){
        const loginPayload ={
            firstName: firstNameField.value,
            lastname: lastNameField.value,
            username: userNameField.value,
            password: passwordField.value, 
            gender: genderField.value,
            email: emailField.value,
            dob: dateField.value,
            address: addressField.value,
            nationality: nationalityField.value 
        }
        console.log(loginPayload);
    }
  });


});
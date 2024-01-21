import { validateFields } from './util/util.mjs';

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

  const submitBtn = document.querySelector(".form-field#submit");

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const validateReport = validateFields(
      firstnameField, 
      lastnameField, 
      usernameField, 
      passwordField, 
      confirmPasswordField,
      email,
      genderSelect,
      dobField,
      addressField,
      nationalityField
    );

    console.log(validateReport);

    // let userType = "n/a";
    // if (customerRadio.checked) {
    //   userType = customerRadio.value;
    // } else if (sellerRadio.checked) {
    //   userType = sellerRadio.value;
    // }

    // console.log({
    //   firstname: firstnameField.value,
    //   lastname: lastnameField.value,
    //   username: usernameField.value,
    //   password: passwordField.value,
    //   confirmPassword: confirmPasswordField.value,
    //   email: emailField.value,
    //   gender: genderSelect.value, // Doubtful yet!
    //   dob: dobField.value,
    //   address: addressField.value,
    //   nationality: nationalityField.value,
    //   userType: userType,
    // });
  });
});
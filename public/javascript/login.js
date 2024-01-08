import { validateFields, makeRequest } from "./util/util.mjs";

document.addEventListener('DOMContentLoaded', function (event) {
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const submitButton = document.querySelector("#loginButton");
  const errorNodes = document.querySelectorAll(".error-message");

  submitButton && submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const validateReport = validateFields(usernameField, passwordField);
    let valid = 0;

    // Render errors on screen if there are any
    for (const report of validateReport) {
      errorNodes[report.index].innerHTML = report.errorMessage;
      if (!report.error) {
        valid++;
      }
    }

    // Submit the form
    if (validateReport.length === valid) {
      const loginPayload = {
        usernameOrEmail: usernameField.value,
        password: passwordField.value
      };

      makeRequest('http://localhost:8080/api/login', "POST", loginPayload)
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          alert(`You're successfully logged in ${data.username}!`);
        } else {
          alert(data.message);
        }
      });
    }

  });
});


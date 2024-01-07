document.addEventListener('DOMContentLoaded', function (event) {
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#password");
  const submitButton = document.querySelector("#loginButton");
  const usernameErrorDisplay = document.querySelector(".username-wrapper .error-message");

  submitButton && submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const validateReport = validateFields(usernameField, passwordField);

    for(const report of validateReport) {
      if (report.field === "username") {
        usernameErrorDisplay.innerHTML = report.errorMessage;
      }
    }



    console.log(validateReport);
  });
  
  function validateFields(...fields) {
    const fieldReport = [];
    for (const field of fields) {
      if (!field.value) {
        fieldReport.push({
          field: field.getAttribute("name"),
          error: true,
          errorMessage: `${field.getAttribute("name")} is required.`
        });
      }
    }
    return fieldReport;
  }
});


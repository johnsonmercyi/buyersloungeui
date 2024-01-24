function validateFields(...fields) {

  return fields.map(field => {
    // Check if the field is filled
    if (field.type === "text" ||
      field.type === "password" ||
      field.type === "date" ||
      field.type === "email" ||
      field.type === "textarea" ||
      field.nodeName === "SELECT") {
      if (!field.value) {
        return {
          field: field.getAttribute("name"),
          error: true,
          errorMessage: `${field.getAttribute("name")} is required.`,
          index: fields.indexOf(field)
        };
      } else {
        // When the field is filled

        // Checks if the password is contains up to 8 characters
        if (field.type === "password") {

          if (field.value.length < 8) {
            return {
              field: field.getAttribute("name"),
              error: true,
              errorMessage: `${field.getAttribute("name")} is must be at least 8 characters`,
              index: fields.indexOf(field)
            };
          }
          
          if(field.getAttribute("name") === "confirmPassword"){
            //check if confirmpassword matches password
            let password = document.querySelector(".form-field#password");

            if (field.value != password.value){
              return{
                field: field.getAttribute("name"),
                error: true,
                errorMessage: `${field.getAttribute("name")} must match password`,
                index: fields.indexOf(field)
              };
            }
          }
        }

        // Yeaa! Everything is okay.
        return {
          field: field.getAttribute("name"),
          error: false,
          errorMessage: ``,
          index: fields.indexOf(field)
        };
      }
    } else {
      // Check for other form fields that the validation does not match with that of the input, select etc...
    }

  });
}


function isFormFieldsFilled(errorNodes, validateReport) {
  let valid = 0;

  for (const report of validateReport) {
    errorNodes[report.index].innerHTML = report.errorMessage;
    if (!report.error) {
      valid++;
    }
  }

  return valid === validateReport.length;
}


async function makeRequest(url, method, data) {
  return await fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

function displayStatusMessage(notifyNode, statusMessage, styleOptions={}) {
  notifyNode.innerHTML = statusMessage;
  Object.keys(styleOptions).forEach(key => {
    notifyNode.style[key] = styleOptions[key];
  });
}

export {
  validateFields,
  makeRequest,
  isFormFieldsFilled,
  displayStatusMessage
}
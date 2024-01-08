function validateFields(...fields) {

  return fields.map(field => {
    // Check if the field is filled
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
      if (field.getAttribute("name") === "password") {
        if (field.value.length < 8) {
          return {
            field: field.getAttribute("name"),
            error: true,
            errorMessage: `${field.getAttribute("name")} is must be at least 8 characters`,
            index: fields.indexOf(field)
          };
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
  });
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

export {
  validateFields,
  makeRequest
}
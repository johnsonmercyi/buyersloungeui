function doSomething() {
  return new Promise(function (resolve, reject) {
    console.log("Fetching ...");
    setTimeout(() => {
      return resolve({ name: "Johnson" });
      // return reject({ error: "Something went wrong in the server!" });
    }, 5000);
  });
}

doSomething().then(
  function (value) {
    console.log(value);
    console.log("Data fetched now redirecting to a new page!");
  }, 

  function (error) {
    console.log(error);
  }
);

async function fetchData() {
  try {
    const data = await doSomething();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

// console.log("This will execute before the promise resolves");



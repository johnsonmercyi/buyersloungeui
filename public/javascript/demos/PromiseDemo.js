const promise = new Promise(function(resolve, reject) {
  if (true) {
    resolve(2 + 5);
  } else {
    reject("This is a value returned when the state is reject");
  }
});

promise.then((value) => {
  return value * 2;
})
.then(result => {
  console.log("What do you have? ", result);
})
.catch(err => {
  console.log(err);
});
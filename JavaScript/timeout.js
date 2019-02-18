const promise = new Promise((resolve, reject) => {
  var actual = setTimeout(() => {
    clearTimeout(timeout);
    resolve();
  }, 5000);
  var timeout = setTimeout(() => {
    clearTimeout(actual);
    reject();
  }, 1000);
})
  .then(() => console.log("Success"))
  .catch(() => console.log("Reject"));

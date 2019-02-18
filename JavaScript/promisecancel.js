const Promise = require("bluebird");
Promise.config({
  cancellation: true
});
const promise = new Promise((resolve, reject, onCancel) => {
  const id = setTimeout(resolve, 10000);
  onCancel(() => clearTimeout(id));
});
// use the promise as usual
promise.then(() => console.log("done"));
// anytime later
promise.cancel();

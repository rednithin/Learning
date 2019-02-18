let actualReject, timeoutReject;

const timeout = new Promise((resolve, reject) =>
  setTimeout(() => {
    timeoutReject = reject;
    reject();
  }, 5000)
);
let actual = new Promise((resolve, reject) => {
  setTimeout(() => {
    actualReject = reject;
    resolve();
  }, 1000);
});

Promise.race([timeout, actual])
  .then(() => {
    console.log("Success");
  })
  .catch(() => {
    console.log("Failed");
  });

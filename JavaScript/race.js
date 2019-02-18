function mySetTimeout(ms) {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      reject();
    }, ms)
  );
}

function otherFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

function race(...promises) {
  return new Promise((resolve, reject) =>
    promises.forEach(p => p.then(resolve).catch(reject))
  );
}

race(otherFunction(), mySetTimeout(1500))
  .then(() => console.log("Succeded"))
  .catch(() => console.log("Failed"));

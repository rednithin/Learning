function fetch() {
  return new Promise((resolve, reject) => {
    if (Math.random() <= 0.5) {
      resolve();
    } else {
      reject();
    }
  });
}

fetch()
  .then(() => console.log("Success"))
  .catch(() => console.log("Failure"));

(async () => {
  try {
    await fetch();
    console.log("succ");
  } catch {
    console.log("fail");
  }
})();

module.exports = (timeout = 100) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    resolve();
  }, timeout);
});

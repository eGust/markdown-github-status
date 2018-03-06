module.exports = (timeout = 50) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    resolve();
  }, timeout);
});

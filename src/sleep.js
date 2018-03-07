module.exports = (timeout = 300) => new Promise((resolve) => {
  const timer = setTimeout(() => {
    clearTimeout(timer);
    resolve();
  }, timeout);
});

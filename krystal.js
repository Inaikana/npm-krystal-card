function krystal(arr) {
  const k = arr.reduce((a, b) => {
    return a + String.fromCharCode(b);
  }, "");
  return k;
}

module.exports = krystal;

let lastTime = 0;
const throttle = (func, limit) => {
  return function () {
    const now = new Date().getTime();
    if (now - lastTime >= limit) {
      func();
      lastTime = now;
    }
  };
};

window.addEventListener('scroll', throttle(() => {
  console.log('Scroll event triggered');
}, 200));

export const debounce = (
  fn: (...arg: any[]) => any,
  duration: number = 300
) => {
  let timer = -1;
  return function (this: unknown, ...args: any[]) {
    if (timer > -1) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.bind(this)(...args);
      timer = -1;
    }, duration);
  };
};
export const throttle = (
  fn: (...arg: any[]) => any,
  interval: number = 300
) => {
  let lock = false;
  return function (this: unknown, ...args: any[]) {
    if (lock) return;
    lock = true;
    setTimeout(() => (lock = false), interval);
    fn.bind(this)(...args);
  };
};

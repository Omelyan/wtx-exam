export function wait(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// just a dummy, should be a formatter in real life
export function formatCurrency(value: number) {
  return `\u20ac\u2009${value.toFixed(2)}`;
}

function analyzeArray(arr) {
  let n = arr.length;
  if (n === 0) {
    return null;
  }
  const obj = {
    average() {
      let sum = 0;
      for (let i = 0; i < n; i++) {
        sum += arr[i];
      }
      return sum / n;
    },
    min() {
      let min = Number.MAX_SAFE_INTEGER;

      for (let i = 0; i < n; i++) {
        min = Math.min(min, arr[i]);
      }

      return min;
    },
    max() {
      let max = Number.MIN_SAFE_INTEGER;

      for (let i = 0; i < n; i++) {
        max = Math.max(max, arr[i]);
      }

      return max;
    },
    length() {
      return arr.length;
    },
  };

  return obj;
}

export { analyzeArray };

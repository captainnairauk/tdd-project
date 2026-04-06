function reverseString(string) {
  const arr = Array.from(string);

  let lo = 0;
  let hi = arr.length - 1;
  while (lo < hi) {
    const temp = arr[lo];
    arr[lo] = arr[hi];
    arr[hi] = temp;

    lo++;
    hi--;
  }

  return arr.join("");
}

export { reverseString };

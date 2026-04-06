function calculator(a, b) {
  const calc = {
    add() {
      return a + b;
    },
    subtract() {
      return a - b;
    },
    divide() {
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;
    },
    multiply() {
      return a * b;
    },
  };

  return calc;
}

export { calculator };

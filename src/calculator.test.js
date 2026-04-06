import { calculator } from "./calculator";

test("Add positive integers", () => {
  const calc = calculator(5, 3);
  expect(calc.add()).toBe(8);
});

test("Add negative numbers", () => {
  const calc = calculator(-5, -3);
  expect(calc.add()).toBe(-8);
});

test("Add decimals", () => {
  const calc = calculator(0.1, 0.2);
  expect(calc.add()).toBeCloseTo(0.3);
});

test("Basic subtraction", () => {
  const calc = calculator(10, 4);
  expect(calc.subtract()).toBe(6);
});

test("Resulting in negative", () => {
  const calc = calculator(5, 10);
  expect(calc.subtract()).toBe(-5);
});

test("Subtracting negative", () => {
  const calc = calculator(10, -5);
  expect(calc.subtract()).toBe(15);
});

test("Basic multiplication", () => {
  const calc = calculator(7, 9);
  expect(calc.multiply()).toBe(63);
});

test("Multiply by zero", () => {
  const calc = calculator(5, 0);
  expect(calc.multiply()).toBe(0);
});

test("Negative & Positive", () => {
  const calc = calculator(-4, 3);
  expect(calc.multiply()).toBe(-12);
});

test("Even division", () => {
  const calc = calculator(20, 4);
  expect(calc.divide()).toBe(5);
});

test("Decimal result", () => {
  const calc = calculator(5, 2);
  expect(calc.divide()).toBeCloseTo(2.5);
});

test("Division by zero", () => {
  const calc = calculator(10, 0);
  expect(calc.divide()).toMatch(/Error: Division by zero/);
});

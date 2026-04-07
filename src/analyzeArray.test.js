import { analyzeArray } from "./analyzeArray";

test("Standard input", () => {
  const obj = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(obj.average()).toBeCloseTo(4);
  expect(obj.min()).toBe(1);
  expect(obj.max()).toBe(8);
  expect(obj.length()).toBe(6);
});

test("Single element", () => {
  const obj = analyzeArray([7]);
  expect(obj.average()).toBeCloseTo(7);
  expect(obj.min()).toBe(7);
  expect(obj.max()).toBe(7);
  expect(obj.length()).toBe(1);
});

test("Negative numbers", () => {
  const obj = analyzeArray([-1, -5, -10, -2]);
  expect(obj.average()).toBeCloseTo(-4.5);
  expect(obj.min()).toBe(-10);
  expect(obj.max()).toBe(-1);
  expect(obj.length()).toBe(4);
});

test("Mixed positive/negative", () => {
  const obj = analyzeArray([-1, 2, -10, 8]);
  expect(obj.average()).toBeCloseTo(-0.25);
  expect(obj.min()).toBe(-10);
  expect(obj.max()).toBe(8);
  expect(obj.length()).toBe(4);
});

test("Empty array", () => {
  const obj = analyzeArray([]);
  expect(obj).toBeNull();
});

test("Identical numbers", () => {
  const obj = analyzeArray([5, 5, 5]);
  expect(obj.average()).toBeCloseTo(5);
  expect(obj.min()).toBe(5);
  expect(obj.max()).toBe(5);
  expect(obj.length()).toBe(3);
});

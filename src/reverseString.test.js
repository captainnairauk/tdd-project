import { reverseString } from "./reverseString";

test("Short string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("Long string", () => {
  expect(reverseString("Greetings from Earth")).toBe("htraE morf sgniteerG");
});

test("Mixed case", () => {
  expect(reverseString("Howdy")).toBe("ydwoH");
});

test("Palindrome", () => {
  expect(reverseString("racecar")).toBe("racecar");
});

test("Empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Single character", () => {
  expect(reverseString("a")).toBe("a");
});

test("Whitespace only", () => {
  expect(reverseString(" ")).toBe(" ");
});

test("Alphanumeric", () => {
  expect(reverseString("123abcd")).toBe("dcba321");
});

test("Special characters", () => {
  expect(reverseString("!@#$%")).toBe("%$#@!");
});

test("Unicode", () => {
  expect(reverseString("áe")).toBe("eá");
});

import { caesarCipher } from "./caesarCipher";

test("Basic shifting", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Wrapping(z to a)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation & spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Large shift factors", () => {
  expect(caesarCipher("abc", 27)).toBe("bcd");
});

test("Negative shifts", () => {
  expect(caesarCipher("bcd", -1)).toBe("abc");
});

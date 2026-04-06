import { capitalize } from "./capitalize";

test("aniket", () => {
  expect(capitalize("aniket")).toBe("Aniket");
});

test("this is a test", () => {
  expect(capitalize("this is a test")).toBe("This is a test");
});

test("the Eiffel Tower", () => {
  expect(capitalize("the Eiffel Tower")).toBe("The eiffel tower");
});

test("/index.html", () => {
  expect(capitalize("/index.html")).toBe("/index.html");
});

test("abcd", () => {
  expect(capitalize("abcd")).toBe("Abcd");
});

test("ABCD", () => {
  expect(capitalize("ABCD")).toBe("Abcd");
});

test("aBcD", () => {
  expect(capitalize("aBcD")).toBe("Abcd");
});

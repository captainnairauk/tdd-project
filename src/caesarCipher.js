function caesarCipher(str, shift) {
  const n = ((shift % 26) + 26) % 26;
  return str
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + n) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
      return char;
    })
    .join("");
}

export { caesarCipher };

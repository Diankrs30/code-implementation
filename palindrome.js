const palindrome = (str) => {
  if (typeof str !== "string") return "Invalid! Input harus string.";

  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  if (result === str) {
    return `Kata "${result}" adalah Palindrome dari kata "${str}".`;
  }
  return `Kata "${result} bukan palindrome dari kata ${str}".`;
};

console.log(palindrome("malam"));
console.log(palindrome("saya"));
console.log(palindrome("malsam"));
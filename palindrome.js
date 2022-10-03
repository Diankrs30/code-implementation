const palindrome = (str) => {
  if (typeof str !== "string") return "Invalid! Input harus string.";

  for (let i = str.length-1; i >= 0; i--) {
    if (str[i+1-str.length] === str[i]) {
      return `Kata ${str} adalah Palindrome.`;
    }
    return `Kata ${str} bukan palindrome.`;
  }
};

console.log(palindrome('malam'));

